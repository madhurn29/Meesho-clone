const express = require("express");
const {
  getHomeProducts,
  addHomeProduct,
} = require("../Controller/home.controller");

const homeProductsRouter = express.Router();

homeProductsRouter.get("/", getHomeProducts);
homeProductsRouter.post("/add", addHomeProduct);

module.exports = {
  homeProductsRouter,
};
