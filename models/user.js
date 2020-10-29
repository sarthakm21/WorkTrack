const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    imageURL: String,
    about: String,
    facebook: String,
    instagram: String,
    twitter: String,
    works: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'work'
<<<<<<< HEAD
    }]
=======
    }],
    resetPasswordToken: String,
    resetPasswordExpires: Date
>>>>>>> 71ba96764e1e4b69e721f60d091bf273081dcba3
});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model("User", UserSchema);