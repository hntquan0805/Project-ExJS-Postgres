const express = require('express');
const router = express.Router();
const expressLayouts = require('express-ejs-layouts'); 
const productController = require('../controllers/productController');

router.use(expressLayouts);
router.get('/', productController.getProducts);

router.get('/:id', productController.getProduct);
router.post('/', productController.getProductsAjax);

module.exports = router;