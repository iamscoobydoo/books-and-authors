const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false,
    },
});

module.exports = mongoose.model("Authors", authorSchema);
