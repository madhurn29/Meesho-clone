const express = require("express");
const { adminAuth } = require("../middleware/adminAuth.middleware");
const {
  getOrderProducts,
  addOrderProduct,
  updateOrderProduct,
  deleteOrderProduct,
} = require("../Controller/order.controller");
const { auth } = require("../middleware/auth.middleware");
const orderRouter = express.Router();

orderRouter.post("/add", auth, addOrderProduct);
orderRouter.use(adminAuth);
orderRouter.get("/", getOrderProducts);
orderRouter.patch("/update", updateOrderProduct);
orderRouter.delete("/delete", deleteOrderProduct);

module.exports = { orderRouter };
