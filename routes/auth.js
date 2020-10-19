const express = require('express'),
  router = express.Router(),
  isLoggedIn = require('../middleware/isLoggedIn');

const { getLogin, postLogin, getRegister, postRegister, getLogout, getUserProfile } = require('../controllers/authController');

// LOGIN ROUTES
router
  .route('/login')
  .get(getLogin)
  .post(postLogin);

// REGISTER ROUTES
router
  .route('/register')
  .get(getRegister)
  .post(postRegister);

// LOGOUT ROUTES
router
  .route("/logout")
  .get(getLogout);

// USER PROFILE ROUTES
router
  .route('/users/:id')
  .get(isLoggedIn, getUserProfile);

module.exports = router;