const express = require('express'),
   router = express.Router(),
   isLoggedIn = require('../middleware/isLoggedIn');

const { getEdit, putEdit, deleteWork } = require('../controllers/editController');

// GET AND PUT EDIT ROUTES
router
   .route('/edit/:id', isLoggedIn)
   .get(getEdit)
   .put(putEdit);

// DELETE ROUTE
router
   .route("/delete/:id", isLoggedIn)
   .delete(deleteWork);

module.exports = router;