const mongoose = require('mongoose'); //Biblioteca Node.js

//Schema é uma metodo do mongoose
//Este é o modelo que será armazenado em uma coleção do mongo.db
const GiftSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },
    
    preview: {
        type: String,
        required: true,
    },

    link: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        required: true,
        enum: ['SIM', 'NÃO'],
    },
});

const Gift = mongoose.model("Gift", GiftSchema);

module.exports = Gift;