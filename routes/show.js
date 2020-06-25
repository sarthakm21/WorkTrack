const express = require('express'),
    router = express.Router(),
    Work = require('../models/userWork'),
    isLoggedIn = require('../middleware/isLoggedIn');

router.get("/", (req, res) => {
    res.redirect("/home");
});

router.get("/home", isLoggedIn, (req, res) => {
    console.log(req.user);
    Work.find({}, null, { sort: { startTime: -1 } }, (err, found) => {
        err ? console.log(err) : res.render("home", { work: found, name: "Start Task" });
    });
});

module.exports = router;