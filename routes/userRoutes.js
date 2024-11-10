const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// router.get('/register', userController.showRegistrationForm);

// router.post('/register', userController.registerUser);

const expressLayouts = require('express-ejs-layouts');

router.use(expressLayouts);

router.get('/', async (req, res) => {
    const users = await userController.getAllUsers(req, res);
    res.render('users/index', { title : "Users", users : users });
});

router.get('/signin', async (req, res) => {
    res.render('users/signin', {title : "Sign In"})
})

router.get('/signup', async (req, res) => {
    res.render('users/signup', {title : "Sign Up"})
})

router.post('/signup', userController.registerUser)

module.exports = router;

