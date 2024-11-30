const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const expressLayouts = require('express-ejs-layouts');
const passport = require('passport')

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

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
          console.error(err);
          return next(err);
        }
        res.redirect('/users/signin');
      });
  });

router.post('/signup', userController.registerUser)

// router.post('/signin', (req, res, next) => {
//     passport.authenticate('local', {
//       successRedirect: '/',
//       failureRedirect: '/users/signin',
//       failureFlash: true
//     })(req, res, next);
// });

router.post('/signin', async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
      if (err) {
          return res.status(500).json({ message: 'Internal server error' });
      }
      if (!user) {
          return res.status(401).json({ message: info.message });
      }
      req.logIn(user, (err) => {
          if (err) {
              return res.status(500).json({ message: 'Internal server error' });
          }
          return res.status(200).json({ success: true });
      });
  })(req, res, next);
});

router.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.render('users/profile', {
      title: 'Access Denied',
      error: 'You must log in to view this page.',
      user: null,
    });
  }

  res.render('users/profile', {
    title: 'Your Profile',
    user: req.user || { name: 'Guest', email: 'Not logged in' },
    error: null,
  });
});

module.exports = router;

