const mongoose = require("mongoose");
const adminSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    phoneNo: Number,
    tempOtp: Number,
    address1: String,
    address2: String,
    pincode: Number,
    city: String,
    state: String,
    role: String,
  },
  {
    versionKey: false,
  }
);

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = { AdminModel };
