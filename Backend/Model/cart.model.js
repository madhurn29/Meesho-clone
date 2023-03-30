const mongoose = require("mongoose");
const cartSchema = mongoose.Schema(
  {
    title: String,
    images: String,
    rating: String,
    price: String,
    reviews: String,
    category: String,
    delivery: String,
    quantity: Number,
    userID: String,
    productID: String,
  },
  {
    versionKey: false,
  }
);

const CartModel = mongoose.model("CartProduct", cartSchema);

module.exports = { CartModel };
