const express = require('express'),
    router = express.Router(),
    isLoggedIn = require('../middleware/isLoggedIn');

const { getHome, getIndex } = require('../controllers/showController');

// GET INDEX ROUTE
router
    .route("/")
    .get(getIndex);

// GET HOME ROUTE
router
    .route("/home")
    .get(isLoggedIn, getHome);

module.exports = router;