const express = require("express");
const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../Controller/product.controller");

const productRouter = express.Router();

//*-------all the controllers are defined in "Controller/product.controller.js"
productRouter.get("/", getProducts);
productRouter.post("/add", addProduct);
productRouter.patch("/update/:id", updateProduct);
productRouter.delete("/delete/:id", deleteProduct);




module.exports = { productRouter };
