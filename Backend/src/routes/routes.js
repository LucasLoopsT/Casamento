const {Router} = require("express");
const router = Router();

// Importando rotas
const userRouter = require("./user.routes");
const giftRouter = require("./gift.routes");

router.use("/user", userRouter);
router.use("/gift", giftRouter);

module.exports = router;