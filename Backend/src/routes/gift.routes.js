const {Router} = require("express");
const giftRouter = Router();

const GiftController = require("../controllers/gift.controller.js");
const controller = new GiftController();

giftRouter.post("/", controller.create);
giftRouter.get("/", controller.findAll);
giftRouter.get("/:id", controller.findById);
giftRouter.patch("/:id", controller.update);
giftRouter.delete("/:id", controller.delete);

module.exports = giftRouter;