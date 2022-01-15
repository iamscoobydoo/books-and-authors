const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: false,
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Authors",
        required: false,
    },
});

module.exports = mongoose.model("Books", bookSchema);
