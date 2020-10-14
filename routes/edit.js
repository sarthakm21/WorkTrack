const express = require('express'),
    router = express.Router(),
    isLoggedIn = require('../middleware/isLoggedIn');

const { getEdit, putEdit, deleteWork } = require('../controllers/editController');

// GET AND PUT EDIT ROUTES
router
    .route('/edit/:id')
    .get(isLoggedIn, getEdit)
    .put(isLoggedIn, putEdit);

// DELETE ROUTE
router
    .route("/delete/:id")
    .delete(isLoggedIn, deleteWork);

module.exports = router;