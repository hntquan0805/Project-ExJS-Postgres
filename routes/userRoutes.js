const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const axios = require('axios');

const expressLayouts = require('express-ejs-layouts');

router.use(expressLayouts);

router.get('/signin', async (req, res) => {
    res.render('users/signin', {title : "Sign In"})
})

router.get('/signup', async (req, res) => {
    res.render('users/signup', {title : "Sign Up"})
})

//router.post('/signup', userController.registerUser)

router.post('/signup', userController.registerUser)

module.exports = router;

