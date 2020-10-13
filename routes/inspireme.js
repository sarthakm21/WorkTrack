const express = require('express'),
    router = express.Router(),
    isLoggedIn = require('../middleware/isLoggedIn');

const { getInspire, postInspire, deleteInspire } = require('../controllers/inspireController');

// GET INSPIRE
router.get("/inspireme", getInspire)

// POST INSPIRE
router.post("/inspireme/:id", isLoggedIn, postInspire);

// DELETE INSPIRE
router.delete("/inspireme/delete/:id", isLoggedIn, deleteInspire);

module.exports = router;