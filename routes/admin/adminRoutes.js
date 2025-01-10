const express = require("express");
const expressLayouts = require('express-ejs-layouts');

const router = express.Router();

router.use(expressLayouts);

router.get("/", (req, res) => {
  if (!req.isAuthenticated() || req.user.role !== "admin") {
    return res.redirect("/users/signin");
  }
  res.render("admin", {title : "Admin", layout : "./layouts/admin/admin_page_layout"});
});

module.exports = router;