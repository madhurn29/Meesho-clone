const express = require("express");
const { connection } = require("./config/db");
const { adminRouter } = require("./Routes/admin.route");
const { cartRouter } = require("./Routes/cart.route");
const { productRouter } = require("./Routes/product.route");
const { userRouter } = require("./Routes/user.route");
const { orderRouter } = require("./Routes/order.route");
const { homeProductsRouter } = require("./Routes/home.route");
var cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/orders", orderRouter);
app.use("/homeproducts", homeProductsRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to database");
  } catch (error) {
    console.error(error.message);
  }

  console.log(`server listening on ${process.env.PORT}`);
});
