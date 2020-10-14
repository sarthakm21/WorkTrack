const Work = require('../models/userWork');

// GET EDIT ROUTE
exports.getEdit = (req, res) => {
    Work.findById(req.params.id, (err, done) => {
        if (err) {
            console.log(err);
            return res.redirect("/edit" + req.params.id);
        }
        res.render("editform", { data: done });
    });
};

// PUT EDIT ROUTE
exports.putEdit = (req, res) => {
    Work.findById(req.params.id, (err, done) => {
        if (err) {
            console.log(err);
            return res.redirect("/edit" + req.params.id);
        }
        done.title = req.body.title;
        done.desc = req.body.desc;

        Work.findByIdAndUpdate(req.params.id, done, (error, updated) => {
            if (error) {
                console.log(error);
                return res.redirect("/edit" + req.params.id);
            } else {
                res.redirect("/home");
            }
        });
    });
};

// DELETE ROUTE
exports.deleteWork = (req, res) => {
    Work.findByIdAndRemove(req.params.id, (err, done) => {
        if (err)
            console.log(err)
        else
            console.log("Successfully Deleted");

        res.redirect("/home");
    });
};