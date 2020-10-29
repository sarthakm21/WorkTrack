const express = require('express'),
  router = express.Router(),
<<<<<<< HEAD
  isLoggedIn = require('../middleware/isLoggedIn');

const { getLogin, postLogin, getRegister, postRegister, getLogout, getUserProfile } = require('../controllers/authController');
=======
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
>>>>>>> 71ba96764e1e4b69e721f60d091bf273081dcba3

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
<<<<<<< HEAD
=======

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
>>>>>>> 71ba96764e1e4b69e721f60d091bf273081dcba3

module.exports = router;