const express = require('express'),
    router = express.Router(),
    User = require('../models/user'),
    passport = require('passport');

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
}));

router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", (req, res) => {
    var newUser = new User({ username: req.body.username, email: req.body.email });
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.redirect("/register");
        }
        passport.authenticate("local")(req, res, () => {
            res.redirect("/home");
        })
    });
})

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
})

module.exports = router;