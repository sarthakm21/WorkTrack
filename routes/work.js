const express = require('express'),
    router = express.Router(),
    isLoggedIn = require('../middleware/isLoggedIn');

const { getWork, postHome } = require('../controllers/workController');

// ADD WORK ROUTE
router
    .route("/addwork", isLoggedIn)
    .get(getWork);

// POST HOME ROUTE
router
    .route("/home", isLoggedIn)
    .post(postHome);

module.exports = router;