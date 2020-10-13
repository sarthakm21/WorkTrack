const passport = require('passport');

// GET LOGIN
exports.getLogin = (req, res) => {
    res.render("login");
};

// POST LOGIN
exports.postLogin = passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
    failureFlash: 'Invalid Email and/or password'
});

// GET REGISTER
exports.getRegister = (req, res) => {
    res.render("register");
};

// POST REGISTER
exports.postRegister = (req, res) => {
    if (!req.body.username || !req.body.email || !req.body.password || !req.body.passwordconfirm) {
        req.flash('error', "Please fill out all the fields");
        res.redirect("/register");
    }

    else if (req.body.password !== req.body.passwordconfirm) {
        req.flash('error', "The passwords do not match");
        res.redirect("/register");
    }

    else {
        var newUser = new User({ username: req.body.username, email: req.body.email });
        User.register(newUser, req.body.password, (err, user) => {
            if (err) {
                console.log(err);
                if (err.message === "A user with the given username is already registered")
                    req.flash('error', "A user with the Email already exists");

                else if (err.message === "No username was given")
                    req.flash('error', "No Email was given");

                else
                    req.flash('error', err.message);

                return res.redirect("/register");
            }
            passport.authenticate("local")(req, res, () => {
                res.redirect("/home");
            })
        });
    }
};

// GET LOGOUT
exports.getLogout = (req, res) => {
    req.logout();
    req.flash('success', 'Successfully Logged Out')
    res.redirect("/login");
};