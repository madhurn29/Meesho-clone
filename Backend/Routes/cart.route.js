const express = require("express");
const {
  getCartProducts,
  addCartProduct,
  updateCartProduct,
  deleteCartProduct,
} = require("../Controller/cart.controller");
const { auth } = require("../middleware/auth.middleware");

const cartRouter = express.Router();

//*-------all the controllers are defined in "Controller/product.controller.js"
cartRouter.use(auth);
cartRouter.get("/", getCartProducts);
cartRouter.post("/add", addCartProduct);
cartRouter.patch("/update/:id", updateCartProduct);
cartRouter.delete("/delete/:id", deleteCartProduct);

module.exports = { cartRouter };
