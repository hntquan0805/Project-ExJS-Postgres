const { User } = require('../models');

exports.getAllUsers = (req, res) => {
  return User.findAll();
};
