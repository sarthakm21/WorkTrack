const express = require('express'),
    router = express.Router(),
    isLoggedIn = require('../middleware/isLoggedIn');


const { getHome, getIndex, postHome } = require('../controllers/showController');

// GET INDEX ROUTE
router
    .route("/")
    .get(getIndex);

// GET HOME ROUTE
router
    .route("/home")
    .get(isLoggedIn, getHome);


// POST HOME ROUTE
router
    .route("/home")
    .post(isLoggedIn, postHome);


module.exports = router;