const {Router} = require("express");
const commentRouter = Router();

const CommentController = require("../controllers/comments.controller.js");
const controller = new CommentController();

commentRouter.post("/", controller.create);
commentRouter.get("/", controller.findAll);
commentRouter.get("/:id", controller.findById);
commentRouter.patch("/:id", controller.update);
commentRouter.delete("/:id", controller.delete);

module.exports = commentRouter;