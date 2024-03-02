const express = require("express"); 
const connectDatabase = require("./src/db.js");
const dotenv = require("dotenv");
var cors = require("cors");

const routes = require("./src/routes/routes.js")

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3001;

connectDatabase();
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));