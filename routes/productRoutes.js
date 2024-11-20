const express = require('express');
const router = express.Router();
const expressLayouts = require('express-ejs-layouts'); 
const productController = require('../controllers/productController');
const querystring = require('querystring');

router.use(expressLayouts);
router.get('/', async (req, res) => {
    const queryData = {
        pagination: {
            currentPage: req.query.page ? parseInt(req.query.page) : 1,
            pageSize: req.query.pageSize ? parseInt(req.query.pageSize) : 16,
            totalPages: 0
        },
        filter: {
            minPrice: req.query.minPrice ? parseFloat(req.query.minPrice) : -1,
            maxPrice: req.query.maxPrice ? parseFloat(req.query.maxPrice) : -1,
            description: req.query.description ? req.query.description : "",
            name: req.query.name ? req.query.name : "",
            category: req.query.category ? req.query.category : ""
        }
    };
    // Preprocess the query data
    // Swap minPrice and maxPrice if minPrice > maxPrice
    if (queryData.filter.minPrice >= 0 && queryData.filter.maxPrice >= 0 && queryData.filter.minPrice > queryData.filter.maxPrice) {
        const temp = queryData.filter.minPrice;
        queryData.filter.minPrice = queryData.filter.maxPrice;
        queryData.filter.maxPrice = temp;
    }
    const resultProducts = await productController.getProducts(req, res, queryData);
    queryData.pagination.totalPages = Math.ceil(resultProducts.count / queryData.pagination.pageSize);
    const products = resultProducts.rows;
    const filterQueryString = querystring.stringify(queryData.filter);
    
    const categories = await productController.getCategories(req, res);
    res.render('products/index', { title: 'Products', products : products, queryData: queryData, filterQueryString : filterQueryString, categories : categories});
});
router.get('/:id', async (req, res) => {
    const product = await productController.getProductById(req, res);
    // Dummy recommendations
    const maxRecommendations = 10;

    const queryData = {
        pagination: {
            currentPage: 1,
            pageSize: maxRecommendations,
            totalPages: 0
        },
        filter: {
            excludeId: product.id,
            category: product.category,
        }
    };
    queryData.filter.excludeId = product.id;

    const recommendations = (await productController.getProducts(req, res, queryData)).rows;
    res.render('products/show', { 
        title: product.name, 
        product: product, 
        layout : 'layouts/layout', 
        recommendations : recommendations
    });
});

module.exports = router;