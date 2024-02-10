const mongoose = require('mongoose'); //Biblioteca Node.js

//Schema é uma metodo do mongoose
//Este é o modelo que será armazenado em uma coleção do mongo.db
const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    text: {
        type: String,
        required: true,
        select: false,
    }
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;