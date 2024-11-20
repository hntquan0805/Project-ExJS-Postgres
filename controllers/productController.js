const { raw } = require('express');
const { product } = require('../models');
const { Op, ARRAY, Sequelize } = require('sequelize');

exports.getCategories = async (req, res) => {
  // Category attribute is an array of categories
  const products = await product.findAll({
    attributes: ['category'],
    raw: true
  });
  const categories = [...new Set(products.map(product => product.category).flat())];
  return categories;
};

// Merging both pagination and filter functionality
exports.getProducts = (req, res, queryData) => {
  const { pagination, filter } = queryData;

  const dbFilter = {}
  // Pagination
  if (pagination){
    if (pagination.currentPage && pagination.pageSize) {
      dbFilter.offset = (pagination.currentPage - 1) * pagination.pageSize;
      dbFilter.limit = pagination.pageSize;
    }
  }
  // Search and dbFilter
  if (filter){
    dbFilter.where = {};
    if (filter.name && filter.name.length > 0) {
      dbFilter.where.name = { [Op.iLike]: `%${filter.name}%` };
    }
    if (filter.description && filter.description.length > 0) {
      dbFilter.where.description = { [Op.iLike]: `%${filter.description}%` };
    }
    if (filter.minPrice && filter.minPrice >= 0) {
      dbFilter.where.price = { ...dbFilter.where.price, [Op.gte]: filter.minPrice};
    }
    if (filter.maxPrice && filter.maxPrice >= 0) {
      dbFilter.where.price = { ...dbFilter.where.price, [Op.lte]: filter.maxPrice};
    }
    if (filter.category) {
      const categories = Array.isArray(filter.category) 
        ? filter.category 
        : (typeof filter.category === 'string' 
          ? filter.category.split(',').map(cat => cat.trim()) 
          : []);
      
      if (categories.length > 0) {
        dbFilter.where.category = { 
          [Op.overlap]: Sequelize.literal(`ARRAY['${categories.join("','")}']::varchar[]`) 
        };
      }
    }
    if (filter.excludeId) {
      dbFilter.where.id = { [Op.ne]: filter.excludeId };  // Exclude the current product
    }
  }

  return product.findAndCountAll(dbFilter);
}

// exports.getProducts_ = (req, res) => {
//   const { search, description, minPrice, maxPrice } = req.query;

//   const filter = {
//     where: {},
//   };

//   if (search) {
//     filter.where.name = { [Op.iLike]: `%${search}%` };
//   }

//   if (description) {
//     filter.where.description = { [Op.iLike]: `%${description}%` };
//   }

//   if (minPrice) {
//     filter.where.price = { ...filter.where.price, [Op.gte]: minPrice };
//   }

//   if (maxPrice) {
//     filter.where.price = { ...filter.where.price, [Op.lte]: maxPrice };
//   }

//   return product.findAll(filter);
// };

exports.getAllProducts = (req, res) => {
  return  product.findAll(); // Fetch all products from the database
};

exports.getProductById = (req, res) => {
  return product.findByPk(req.params.id); // Use Product (uppercase) here
};

// exports.getProductsByPage = (page, pageSize) => {
//   const offset = (page - 1) * pageSize; // Calculate the offset based on the page number and limit

//   return product.findAndCountAll({
//     limit : pageSize,
//     offset : offset,
//   }); // Fetch products with pagination from the database
// };