const express = require('express'),
    router = express.Router(),
    Work = require('../models/userWork'),
    isLoggedIn = require('../middleware/isLoggedIn');


router.get("/", (req, res) => {
    res.redirect("/home");
});

router.post("/home" , (req,res) => {
    if(!req.body.start || !req.body.end) {
        req.flash('error', "please ,fill both start and end date to view your work");
        res.redirect("/home");
    }
    
    Work.find({ "author": req.user._id }, null, { sort: { startTime: -1 } }, (err, found) => {
         err ? console.log(err) : res.render("home", { work: found, name: "Start Task", startDate:req.body.start, endDate:req.body.end});
    });
})


router.get("/home", isLoggedIn, (req, res) => {
    Work.find({ "author": req.user._id }, null, { sort: { startTime: -1 } }, (err, found) => {
         err ? console.log(err) : res.render("home", { work: found, name: "Start Task", startDate:new Date('October 12, 2010 24:00:00 GMT+05:30'), endDate:new Date()});
    });
});

module.exports = router;