const { product } = require('../models');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await product.findAll(); // Fetch all products from the database

    res.render('products/index', { products }); // Render the products list view with data
  } catch (error) {
    console.error("Error fetching all products:", error);
    res.status(500).send('Server error');
  }
};

exports.getProductById = async (req, res) => {
  try {
    const productID = await product.findByPk(req.params.id); // Use Product (uppercase) here

    if (!productID) {
      return res.status(404).send('Product not found'); // Handle case where product is not found
    }

    res.render('products/details', { productID });
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).send('Server error');
  }
};
