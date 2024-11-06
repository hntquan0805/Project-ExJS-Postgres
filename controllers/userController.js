const { User } = require('../models');

exports.showRegistrationForm = (req, res) => {
  res.render('users/register');
};

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).send('Email already in use');
    }

    const newUser = await User.create({ name, email, password });
    res.render('users/success', { user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user');
  }
};