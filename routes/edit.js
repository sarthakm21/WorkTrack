const express = require('express'),
    router = express.Router(),
    Work = require('../models/userWork'),
    isLoggedIn = require('../middleware/isLoggedIn');

router.get("/edit/:id",isLoggedIn, (req,res) => {
    Work.findById(req.params.id, (err,done) => {
        if(err){
            console.log(err);
            return res.redirect("/edit"+req.params.id);
        } 
        res.render("editform", {data: done});
    });
});

router.put("/edit/:id", isLoggedIn, (req,res) => {
    Work.findById(req.params.id, (err,done) => {
        if(err){
            console.log(err);
            return res.redirect("/edit"+req.params.id);
        }
        done.title = req.body.title;
        done.desc = req.body.desc;

        Work.findByIdAndUpdate(req.params.id, done, (error,updated) => {
            if(error){
                console.log(error);
                return res.redirect("/edit"+req.params.id);
            } else {
                console.log(updated);
                res.redirect("/home");
            }
        });
    });
});

router.delete("/delete/:id", (req,res) => {
    Work.findByIdAndRemove(req.params.id, (err,done) => {
        if(err)
        console.log(err)
        else
        console.log("Successfully Deleted");

        res.redirect("/home");
    });
});

module.exports = router;