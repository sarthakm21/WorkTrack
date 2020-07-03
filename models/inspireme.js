const mongoose = require('mongoose');

const inspireSchema = new mongoose.Schema({
    title: String,
    desc: String,
    startTime: Date,
    endTime: Date,
    authorid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    authorname: String,
    postid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        unique: true
    },
    postingTime: Date
});

module.exports = mongoose.model("inspiration", inspireSchema);