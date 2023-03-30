const express = require("express");
const {
  registerAdmin,
  validateOtpforAdmin,
  updateAdmin,
} = require("../Controller/admin.controller");

const adminRouter = express.Router();

adminRouter.post("/register", registerAdmin);
adminRouter.post("/validateOtp", validateOtpforAdmin);
adminRouter.patch("/update/:id", updateAdmin);

module.exports = { adminRouter };
