const express = require('express'),
    router = express.Router(),
    isLoggedIn = require('../middleware/isLoggedIn');

const { getStats } = require('../controllers/statController');

// GET STATS ROUTE
router
    .route("/statistics", isLoggedIn)
    .get(getStats);

module.exports = router;