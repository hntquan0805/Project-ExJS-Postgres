const { User } = require('../models');

// exports.showRegistrationForm = (req, res) => {
//   res.render('users/signup');
// };

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).send('Email already in use');
    }

    const newUser = await User.create({ name, email, password });
    res.render('users/success', {title : "Sign Up Success", user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user');
  }
};

// exports.getAllUsers = async (req, res) => {
//   const users = await User.findAll();
//   res.render('users/index', { users });
// };
