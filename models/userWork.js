const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    title: String,
    desc: String,
    startTime: Date,
    endTime: Date,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
});

module.exports = mongoose.model("work", workSchema);