const express = require('express'),
    router = express.Router(),
    isLoggedIn = require('../middleware/isLoggedIn');

const { getWork, postHome } = require('../controllers/workController');

// ADD WORK ROUTE
router
    .route("/addwork")
    .get(isLoggedIn, getWork);

// POST HOME ROUTE
router
    .route("/home")
    .post(isLoggedIn, postHome);

module.exports = router;