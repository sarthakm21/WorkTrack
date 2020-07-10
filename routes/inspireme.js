const express = require('express'),
    router = express.Router(),
    Inspire = require('../models/inspireme'),
    Work = require('../models/userWork'),
    isLoggedIn = require('../middleware/isLoggedIn');

router.get("/inspireme", (req,res) => {
    Inspire.find({}, null, { sort: { postingTime: -1 } }, (err,done) => {
        if(err)
        throw err;

        res.render("inspireme", {data: done});
    })
})

router.post("/inspireme/:id", isLoggedIn, (req,res) => {
    Work.findById(req.params.id, (err,found) => {
        if(err)
        return res.redirect("/home");

        let add = {
            title: found.title,
            desc: found.desc,
            startTime: found.startTime,
            endTime: found.endTime,
            authorid: found.author,
            postid: found._id,
            postingTime: new Date(),
            authorname: req.user.username
        }

        Inspire.create(add, (error, done) => {
            if(error){
                console.log(error);   
                req.flash("error", "This post has already been shared");
                res.redirect("/home");
            }

            else{
                req.flash("success", "Successfully shared your work!");
                res.redirect("/inspireme");
            }
        })
    });
});

router.delete("/inspireme/delete/:id", (req,res) => {
    Inspire.findByIdAndDelete(req.params.id, (err,done) => {
        if(err){
            console.log(err);
            req.flash("error", "Some error occured");
        }
        else {
            req.flash("success", "Post Deleted!");
            res.redirect("/inspireme");
        }
    })
});

module.exports = router;