const {Router} = require("express");
const router = Router();

// Importando rotas
const userRouter = require("./user.routes");
const giftRouter = require("./gift.routes");
const commentRouter = require("./comments.routes");

router.use("/user", userRouter);
router.use("/gift", giftRouter);
router.use("/comment", commentRouter);

module.exports = router;