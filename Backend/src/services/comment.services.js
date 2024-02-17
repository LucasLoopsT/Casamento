const Comment = require("../models/comments.models.js");

class CommentServices {

    create = (body) => Comment.create(body);
    findAll = () => Comment.find();
    findById = (id) => Comment.findById(id);
    update = (id, updateData) => Comment.findByIdAndUpdate(id, updateData, { new: true });
    delete = (id) => Comment.findByIdAndDelete(id);
    
}

module.exports = CommentServices;