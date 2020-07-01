const express = require('express'),
    router = express.Router(),
    Work = require('../models/userWork'),
    isLoggedIn = require('../middleware/isLoggedIn');

router.get("/", (req, res) => {
    res.redirect("/home");
});

router.get("/home", isLoggedIn, (req, res) => {
    Work.find({ "author": req.user._id }, null, { sort: { startTime: -1 } }, (err, found) => {
        err ? console.log(err) : res.render("home", { work: found, name: "Start Task" });
    });
});

module.exports = router;