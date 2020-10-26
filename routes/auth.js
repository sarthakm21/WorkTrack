const express = require('express'),
  router = express.Router(),
  isLoggedIn = require('../middleware/isLoggedIn'),
  asyncErrorHandler = require('../middleware/asyncErrorHandler');

const {
  getLogin,
  postLogin,
  getRegister,
  postRegister,
  getLogout,
  getUserProfile,
  getForgotPw,
  putForgotPw,
  getReset,
  putReset
} = require('../controllers/authController');

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

// FORGOT PASSWORD ROUTES
router
  .route('/forgot-password')
  .get(getForgotPw)
  .put(asyncErrorHandler(putForgotPw));

// RESET PASSWORD ROUTES
router
  .route('/reset/:token')
  .get(asyncErrorHandler(getReset))
  .put(asyncErrorHandler(putReset));

module.exports = router;