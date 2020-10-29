const passport = require('passport'),
<<<<<<< HEAD
    User = require('../models/user'),
    Work = require('../models/userWork');
=======
    crypto = require('crypto'),
    util = require('util'),
    User = require('../models/user'),
    Work = require('../models/userWork');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
>>>>>>> 71ba96764e1e4b69e721f60d091bf273081dcba3

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
        var newUser = new User(req.body);
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

// GET USER PROFILE
exports.getUserProfile = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            console.log(err);
            return res.redirect('back');
        }
        Work.find({ author: user._id }, (err, userWorks) => {
            if (err) {
                console.log(err);
                return res.redirect('back');
            }
            res.render('userProfile.ejs', { user, userWorks });
        });
    });
<<<<<<< HEAD
=======
};

// GET FORGOT PASSWORD
exports.getForgotPw = (req, res) => {
    res.render("forgot");
};

// PUT FORFOT PW
exports.putForgotPw = async (req, res, next) => {
    const token = await crypto.randomBytes(20).toString('hex');
    const {
        email
    } = req.body;
    const user = await User.findOne({
        email
    });
    if (!user) {
        req.flash('error', "No account with that Email");
        return res.redirect('/forgot-password');
    }
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();

    const msg = {
        to: email,
        from: process.env.EMAIL,
        subject: 'Work Track - Forgot Password / Reset',
        text: `You are receiving this because you (or someone else)
		    have requested the reset of the password for your account.
			Please click on the following link, or copy and paste it
			into your browser to complete the process:
			http://${req.headers.host}/reset/${token}
			If you did not request this, please ignore this email and
			your password will remain unchanged.`.replace(/			/g, ''),
    };
    await sgMail.send(msg);

    req.flash('success', `An Email has been sent to ${email} with further instructions!`);
    res.redirect('/forgot-password');
};

// GET RESET PASSWORD
exports.getReset = async (req, res, next) => {
    const {
        token
    } = req.params;
    const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: {
            $gt: Date.now()
        }
    });
    if (!user) {
        req.flash('error', 'Password Reset Token is invalid or has expired!');
        return res.redirect('/forgot-password');
    }
    res.render('reset', {
        token
    });
};

// PUT RESET PASSWORD
exports.putReset = async (req, res, next) => {
    const {
        token
    } = req.params;
    const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: {
            $gt: Date.now()
        }
    });
    if (!user) {
        req.flash('error', 'Password Reset Token is invalid or has expired!');
        return res.redirect('/forgot-password');
    }
    if (req.body.password === req.body.confirm) {
        await user.setPassword(req.body.password);
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;
        await user.save();
        const login = util.promisify(req.login.bind(req));
        await login(user);
    } else {
        req.flash('error', 'Passwords do not match!')
        return res.redirect(`/reset/${token}`);
    }

    const msg = {
        to: user.email,
        from: process.env.EMAIL,
        subject: 'Work Track - Password Changed',
        text: `Hello,
      This email is to confirm that the password for your account has just been changed.
      If you did not make this change, please hit reply and notify us at once.`.replace(/	  	/g, '')
    };

    await sgMail.send(msg);

    req.session.success = 'Password Successfully Updated!';
    res.redirect('/');
>>>>>>> 71ba96764e1e4b69e721f60d091bf273081dcba3
};