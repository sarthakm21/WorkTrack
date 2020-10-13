const express = require('express'),
    router = express.Router(),
    isLoggedIn = require('../middleware/isLoggedIn');

const { getInspire, postInspire, deleteInspire } = require('../controllers/inspireController');

// GET INSPIRE
router
    .route("/inspireme")
    .get(getInspire);

// POST INSPIRE
router
    .route("/inspireme/:id")
    .post(isLoggedIn, postInspire);

// DELETE INSPIRE
router
    .route("/inspireme/delete/:id")
    .delete(isLoggedIn, deleteInspire);

module.exports = router;