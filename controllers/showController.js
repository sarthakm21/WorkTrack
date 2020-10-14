const Work = require('../models/userWork');

// GET INDEX ROUTE
exports.getIndex = (req, res) => {
    res.redirect("/home");
};

// GET HOME ROUTE
exports.getHome = (req, res) => {
    Work.find({ "author": req.user._id }, null, { sort: { startTime: -1 } }, (err, found) => {
        err ? console.log(err) : res.render("home", { work: found, name: "Start Task" });
    });
};