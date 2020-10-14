const express = require('express'),
    router = express.Router(),
    isLoggedIn = require('../middleware/isLoggedIn');

const { getWork, postWork } = require('../controllers/workController');

// ADD WORK ROUTE
router
    .route("/addwork")
    .get(isLoggedIn, getWork);

// POST WORK ROUTE
router
    .route("/work")
    .post(isLoggedIn, postWork);


module.exports = router;