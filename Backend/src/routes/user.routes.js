const {Router} = require("express");
const userRouter = Router();

const UserController = require("../controllers/user.controller.js");
const controller = new UserController();

userRouter.post("/", controller.create);
userRouter.get("/", controller.findAll);
userRouter.get("/:id", controller.findById);
userRouter.patch("/:id", controller.update);
userRouter.delete("/:id", controller.delete);


module.exports = userRouter;