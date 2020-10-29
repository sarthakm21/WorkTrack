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

    }],
    resetPasswordToken: String,
    resetPasswordExpires: Date

});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model("User", UserSchema);