const User = require("../models/user.models.js");

class UserServices {

    create = (body) => User.create(body);
    findAll = () => User.find();
    findById = (id) => User.findById(id);
    findByEmail = (email) => User.findOne({email: email});
    update = (id, updateData) => User.findByIdAndUpdate(id, updateData, { new: true });
    delete = (id) => User.findByIdAndDelete(id);
    
}

module.exports = UserServices