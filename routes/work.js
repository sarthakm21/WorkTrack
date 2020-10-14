const express = require('express'),
    router = express.Router(),
    Work = require('../models/userWork'),
    isLoggedIn = require('../middleware/isLoggedIn');

router.get("/addwork", isLoggedIn, (req, res) => {
    res.render("addwork");
});

router.post("/work", isLoggedIn, (req, res) => {
    Work.create(req.body.post, (err, done) => {
        if (err) {
            console.log("Error occured while posting to home", err);
            res.redirect("/home");
        } else {
            res.redirect("/home");
        }
    });
});

module.exports = router;