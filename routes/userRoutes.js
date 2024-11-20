const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const expressLayouts = require('express-ejs-layouts');

router.use(expressLayouts);

router.get('/signin', async (req, res) => {
    res.render('users/signin', {title : "Sign In"})
})

router.get('/signup', async (req, res) => {
    res.render('users/signup', {title : "Sign Up"})
})

router.get('/success', async (req, res) => {
    res.render('users/success', {title : "Sign Up Success"})
})
//router.post('/signup', userController.registerUser)

router.post('/signup', userController.registerUser)

module.exports = router;

