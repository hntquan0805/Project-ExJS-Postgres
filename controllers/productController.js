const productService = require('../services/productService');
const querystring = require('querystring');

exports.getProducts = async (req, res) => {
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
          category: req.query.category ? req.query.category : "",
          category_op: req.query.category_op ? req.query.category_op : "contains"
      }
  };
  // Preprocess the query data
  // Swap minPrice and maxPrice if minPrice > maxPrice
  if (queryData.filter.minPrice >= 0 && queryData.filter.maxPrice >= 0 && queryData.filter.minPrice > queryData.filter.maxPrice) {
      const temp = queryData.filter.minPrice;
      queryData.filter.minPrice = queryData.filter.maxPrice;
      queryData.filter.maxPrice = temp;
  }
  const resultProducts = await productService.getProductsByQuery(queryData);
  queryData.pagination.totalPages = Math.ceil(resultProducts.count / queryData.pagination.pageSize);
  const products = resultProducts.rows;
  const filterQueryString = querystring.stringify(queryData.filter);
  const categories = await productService.getCategories();
  res.render('products/index', { title: 'Products', products : products, queryData: queryData, filterQueryString : filterQueryString, categories : categories});
}

exports.getProduct = async (req, res) => {
  const product = await productService.getProductById(req.params.id);
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
          category_op: "overlap"
      }
  };
  queryData.filter.excludeId = product.id;

  const recommendations = (await productService.getProductsByQuery(queryData)).rows;
  res.render('products/show', {
      title: product.name,
      product: product,
      layout : 'layouts/layout',
      recommendations : recommendations
  });
}