const express = require('express'),
    router = express.Router(),
    Work = require('../models/userWork'),
    isLoggedIn = require('../middleware/isLoggedIn');

router.get("/statistics", isLoggedIn, (req, res) => {
    Work.find({ author: req.user._id, startTime: { "$gte": new Date(Date.now() - 1000 * 60 * 60 * 24 * 30), "$lt": new Date() } }, null, { sort: { startTime: 1 } }, (err, final) => {
        if (err) {
            console.log(err);
        } else {
            console.log(final); 
            res.render("statistics", { final: final });
        }
    })
});

module.exports = router;