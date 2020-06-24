const express = require('express'),
    router = express.Router(),
    Work = require('../models/userWork');

router.get("/addwork", (req, res) => {
    res.render("addwork");
});

router.post("/home", (req, res) => {
    Work.create(req.body.post, (err, done) => {
        if (err) {
            console.log("Error occured while posting to home", err);
            res.redirect("/home");
        } else {
            console.log("Task Added", done);
            res.redirect("/home");
        }
    })
});

module.exports = router;