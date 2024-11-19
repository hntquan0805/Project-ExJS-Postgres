const { product } = require('../models');
const { Op } = require('sequelize');

exports.getProducts = (req, res) => {
  const { search, description, minPrice, maxPrice } = req.query;

  const filter = {
    where: {},
  };

  if (search) {
    filter.where.name = { [Op.iLike]: `%${search}%` };
  }

  if (description) {
    filter.where.description = { [Op.iLike]: `%${description}%` };
  }

  if (minPrice) {
    filter.where.price = { ...filter.where.price, [Op.gte]: minPrice };
  }

  if (maxPrice) {
    filter.where.price = { ...filter.where.price, [Op.lte]: maxPrice };
  }

  return product.findAll(filter);
};

exports.getAllProducts = (req, res) => {
  return  product.findAll(); // Fetch all products from the database
};

exports.getProductById = (req, res) => {
  return product.findByPk(req.params.id); // Use Product (uppercase) here
};
