const express = require('express'),
    router = express.Router(),
    User = require('../models/user'),
    passport = require('passport');

const { getLogin, postLogin, getRegister, postRegister, getLogout } = require('../controllers/authController');

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

module.exports = router;