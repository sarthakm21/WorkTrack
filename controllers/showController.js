const Work = require('../models/userWork');

// GET INDEX ROUTE
exports.getIndex = (req, res) => {
    res.redirect("/home");
};

// GET HOME ROUTE
exports.getHome = (req, res) => {
    Work.find({ "author": req.user._id }, null, { sort: { startTime: -1 } }, (err, found) => {
         err ? console.log(err) : res.render("home", { work: found, name: "Start Task", startDate:new Date('October 12, 2010 24:00:00 GMT+05:30'), endDate:new Date()});
    });
};

// POST HOME ROUTE
exports.postHome = (req, res) => {
    if(!req.body.start || !req.body.end) {
        req.flash('error', "please ,fill both start and end date to view your work");
        res.redirect("/home");
    }
    Work.find({ "author": req.user._id }, null, { sort: { startTime: -1 } }, (err, found) => {
         err ? console.log(err) : res.render("home", { work: found, name: "Start Task", startDate:req.body.start, endDate:req.body.end});
    });
};