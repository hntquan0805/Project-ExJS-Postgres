const express = require('express');
const router = express.Router();
const expressLayouts = require('express-ejs-layouts'); 
const productController = require('../controllers/productController');

router.use(expressLayouts);
router.get('/', async (req, res) => {
    const products = await productController.getProducts(req, res);
    res.render('products/index', { title: 'Menu', products: products });
});
router.get('/:id', async (req, res) => {
    const product = await productController.getProductById(req, res);
    // Dummy recommendations
    const otherFood = await productController.getAllProducts(req, res);
    res.render('products/show', { title: product.name, product: product, layout : 'layouts/layout', otherFood : otherFood});
});

module.exports = router;
