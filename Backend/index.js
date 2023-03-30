const express = require("express");
const { connection } = require("./config/db");

const { cartRouter } = require("./Routes/cart.route");
const { productRouter } = require("./Routes/product.route");
const app = express();
require("dotenv").config();
app.use(express.json());

app.use("/products", productRouter);
app.use("/cart", cartRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to database");
  } catch (error) {
    console.error(error.message);
  }

  console.log(`server listening on ${process.env.PORT}`);
});
