// Importa a biblioteca "mongoose" para se conectar ao MongoDB
const mongoose = require("mongoose");

// Declara a função "connectDatabase" para conectar ao banco de dados.
const connectDatabase = () => {
    console.log("Aguarde enquanto a conexão com o banco de dados é estabelecida");

    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Conexão com o MongoDB Atlas estabelecida")).catch((error) => console.log(error));
};

// Exporta a função "connectDatabase" para que ela possa ser usada em outras partes do aplicativo.
module.exports = connectDatabase;