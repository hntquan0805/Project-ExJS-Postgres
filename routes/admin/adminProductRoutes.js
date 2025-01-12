const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const productController = require('../../controllers/productController');

const router = express.Router();

router.use(expressLayouts);

router.get("/", (req, res) => {
  if (!req.isAuthenticated() || req.user.role !== "admin") {
    return res.redirect("/users/signin");
  }
  productController.getProducts(req, res);
});

router.get("/:id", (req, res) => {
  if (!req.isAuthenticated() || req.user.role !== "admin") {
    return res.redirect("/users/signin");
  }
  productController.getProduct(req, res);
});

module.exports = router;