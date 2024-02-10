const User = require("../models/user.models.js");

class UserServices {

    create = (body) => User.create(body);
    findAll = () => User.find();
    findById = (id) => User.findById(id);
    update = (id, updateData) => User.findByIdAndUpdate(id, updateData, { new: true });
    delete = (id) => User.findByIdAndDelete(id);
    
}

module.exports = UserServices