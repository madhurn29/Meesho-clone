const mongoose = require("mongoose");

const homeProductSchema = mongoose.Schema(
  {
    title: String,
    images: String,
    rating: Number,
    price: Number,
    review: String,
    category: String,
    delivery: String,
    totalQuantity: Number,
    id:Number,
    onwards: String,
    discountPercentage:Number,
    brand:String
  },
  {
    versionKey: false,
  }
);


const HomeProductModel = mongoose.model("homeProduct", homeProductSchema);

module.exports = { HomeProductModel };