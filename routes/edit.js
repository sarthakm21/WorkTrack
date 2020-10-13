const express = require('express'),
    router = express.Router(),
    Work = require('../models/userWork'),
    isLoggedIn = require('../middleware/isLoggedIn');

const { getEdit, putEdit, deleteWork } = require('../controllers/editController');

router
    .route('/edit/:id', isLoggedIn)
    .get(getEdit)
    .put(putEdit);

router
    .route("/delete/:id", isLoggedIn)
    .delete(deleteWork);

module.exports = router;