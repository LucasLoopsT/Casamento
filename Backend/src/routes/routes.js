const {Router} = require("express");

// Importando rotas
const userRouter = require("./user.routes");
// const giftsRouter = require("./gifts.routes");

const router = Router();
router.use("/user", userRouter);
// router.use("/gifts", giftsRouter);

module.exports = router;