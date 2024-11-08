const express = require("express");
const expressLayouts = require('express-ejs-layouts');

const router = express.Router();

router.use(expressLayouts);

router.get("/", (req, res) => {
  res.render("pages/booking", {title : "Booking"});
});

module.exports = router;
