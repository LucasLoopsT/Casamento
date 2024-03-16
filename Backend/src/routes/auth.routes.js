const {Router} = require("express");
const authRouter = Router();

const AuthController = require("../controllers/auth.controller.js");
const controller = new AuthController();

authRouter.post("/", controller.login);

module.exports = authRouter;