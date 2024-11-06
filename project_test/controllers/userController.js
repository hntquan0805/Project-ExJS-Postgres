const { User } = require('../models');

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.render('users/index', { users });
};
