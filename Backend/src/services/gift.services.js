const Gift = require("../models/gift.models.js");

class GiftServices {

    create = (body) => Gift.create(body);
    findAll = () => Gift.find();
    findById = (id) => Gift.findById(id);
    update = (id, updateData) => Gift.findByIdAndUpdate(id, updateData, { new: true });
    delete = (id) => Gift.findByIdAndDelete(id);
    
}

module.exports = GiftServices;