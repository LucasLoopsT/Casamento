const mongoose = require('mongoose'); //Biblioteca Node.js

//Schema é uma metodo do mongoose
//Este é o modelo que será armazenado em uma coleção do mongo.db
const CommentSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    userName:{
        type: String,
        required: true,
    },

    text: {
        type: String,
        required: true,
    },

    day: {
        type: String,
        required: true,
    }
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;