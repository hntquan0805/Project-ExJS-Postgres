// routes/orderRoutes.js
const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.use(expressLayouts);

router.post('/checkout', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.render('users/unauthenticated', {title: "Unauthenticated"});
  }
  orderController.createOrder(req, res);
});

router.get('/checkout-success', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.render('users/unauthenticated', {title: "Unauthenticated"});
  }
  res.render('products/checkout-success', {title: 'Checkout Success'});
});

module.exports = router;