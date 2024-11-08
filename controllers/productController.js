const { product } = require('../models');

exports.getAllProducts = (req, res) => {
  return  product.findAll(); // Fetch all products from the database
};

exports.getProductById = (req, res) => {
  return product.findByPk(req.params.id); // Use Product (uppercase) here
};
