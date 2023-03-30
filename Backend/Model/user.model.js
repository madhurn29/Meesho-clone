const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: String,
    phoneNo: Number,
    address1: String,
    address2: String,
    pincode: Number,
    city: String,
    state: String,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
