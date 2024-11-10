const { User } = require('../models');

exports.registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).render('users/signup', {
          title: "Sign Up",
          errors: { confirmPassword: 'Password confirmation does not match' },
          values: { name, email }
      });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).render('users/signup', {
        title: "Sign Up",
        errors: { email: 'Email already in use' },
        values: { name, email }
      });
    }

    const newUser = await User.create({ name, email, password });
    res.render('users/success', { title: "Sign Up Success", user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).render('users/signup', {
      title: "Sign Up",
      errors: { general: 'Error registering user. Please try again later.' },
      values: { name, email }
    });
  }
};
