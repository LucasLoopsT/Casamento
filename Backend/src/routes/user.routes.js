const {Router} = require("express");
const userRouter = Router();

const UserController = require("../controllers/user.controller.js");
const controller = new UserController();

userRouter.post("/", controller.create);

module.exports = userRouter;