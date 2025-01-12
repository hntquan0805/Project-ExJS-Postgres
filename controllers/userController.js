const userService = require('../services/userService');
const passport = require('passport');
const bcrypt = require('bcryptjs');

exports.authenticateUser = async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
      if (err) {
          return res.status(500).json({ message: 'Internal server error' });
      }
      if (!user) {
          return res.status(401).json({ message: info.message });
      }
      req.logIn(user, (err) => {
          if (err) {
              return res.status(500).json({ message: 'Internal server error' });
          }
          return res.status(200).json({ success: true, user: user });
      });
  })(req, res, next);
}

exports.registerUser = async (req, res) => {
  const formDataObject = req.body;
  const err = { name: '', email: '', password: '', confirmPassword: '' };

  // Preprocess
  if (formDataObject.name) {
    formDataObject.name = formDataObject.name.trim();
  }
  if (formDataObject.email) {
    formDataObject.email = formDataObject.email.trim();
  }
  
  // Validation
  if (!formDataObject.name || formDataObject.name === '') {
    err.name = 'Name is required';
    return res.status(400).json(err); // Use return here
  }

  if (!formDataObject.email || formDataObject.email === '') {
    err.email = 'Email is required';
    return res.status(400).json(err); // Use return here
  }

  if (!formDataObject.password || formDataObject.password === '') {
    err.password = 'Password is required';
    return res.status(400).json(err); // Use return here
  }

  if (formDataObject.password && formDataObject.password.length < 6) {
    err.password = 'Password must be at least 6 characters';
    return res.status(400).json(err); // Use return here
  }

  if (!formDataObject.confirmPassword || formDataObject.confirmPassword === '') {
    err.confirmPassword = 'Password confirmation is required';
    return res.status(400).json(err); // Use return here
  }

  if (formDataObject.password !== formDataObject.confirmPassword) {
    err.confirmPassword = 'Password confirmation does not match';
    return res.status(400).json(err); // Use return here
  }

  try {
    const existingUser = await userService.findUserByEmail(formDataObject.email);
    if (existingUser) {
      err.email = "Email is already in use";
      return res.status(400).json(err);
    }

     // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(formDataObject.password, salt);

    const userData = {name: formDataObject.name, email: formDataObject.email, hashedPassword: hashedPassword}
    await userService.createUser(userData);

    // Send the success page as a response
    // Won't work, can't render on a fetch request
    return res.status(200).json({ message: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
}

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.findUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
}

exports.updateUserById = async (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  if (updatedUser.id && updatedUser.id !== userId) {
    return res.status(400).json({ message: 'Bad request' });
  }
  try {
    if (await userService.updateUserById(userId, updatedUser) < 0){
      return res.status(500).json({ message: 'Error updating user' });
    }
    return res.status(200).json({ message: 'User updated' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
}