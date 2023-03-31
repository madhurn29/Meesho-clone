const express = require("express");

const productRouter = express.Router();

const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsbyID,
} = require("../Controller/product.controller");
const { adminAuth } = require("../middleware/adminAuth.middleware");

//*-------all the controllers are defined in "Controller/product.controller.js"
productRouter.get("/", getProducts);
productRouter.get("/:id", getProductsbyID);

productRouter.use(adminAuth);

productRouter.post("/add", addProduct);
productRouter.patch("/update/:id", updateProduct);
productRouter.delete("/delete/:id", deleteProduct);

module.exports = { productRouter };
