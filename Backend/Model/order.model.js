const mongoose = require("mongoose");
const ordersSchema = mongoose.Schema(
  {
    title: String,
    images: String,
    rating: String,
    price: Number,
    reviews: String,
    category: String,
    delivery: String,
    quantity: Number,
    userID: String,
    productID: String,
    date: String,
  },
  {
    versionKey: false,
  }
);

const OrderModel = mongoose.model("order", ordersSchema);

module.exports = { OrderModel };
