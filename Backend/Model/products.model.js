const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: String,
    images: String,
    rating: String,
    price: String,
    reviews: String,
    category: String,
    delivery: String,
    totalQuantity: Number,
  },
  {
    versionKey: false,
  }
);


const ProductModel = mongoose.model("Product", productSchema);

module.exports = { ProductModel };
