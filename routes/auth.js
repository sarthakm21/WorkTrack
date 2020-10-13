const express = require('express'),
    router = express.Router(),
    User = require('../models/user'),
    passport = require('passport');

const { getLogin, postLogin, getRegister, postRegister, getLogout } = require('../controllers/authController');

router.get("/login", getLogin);

router.post("/login", postLogin);

router.get("/register", getRegister);

router.post("/register", postRegister);

router.get("/logout", getLogout);

module.exports = router;