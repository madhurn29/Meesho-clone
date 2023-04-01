const { UserModel } = require("../Model/user.model");
var jwt = require("jsonwebtoken");
function OTPgenrator(otp_length) {
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < otp_length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

const registerUser = async (req, res) => {
  const { phoneNo, firstName, lastName } = req.body;
  const otp = OTPgenrator(6);
  try {
    const existinguser = await UserModel.findOne({ phoneNo });

    if (existinguser) {
      res.status(200).send({
        message: "User already exists",
        OTP: existinguser.tempOtp,
        phoneNo,
        firstName: existinguser.firstName || "user",
        lastName: existinguser.lastName || "user",
      });
    } else {
      req.body.tempOtp = otp;
      const newUser = new UserModel(req.body);
      await newUser.save();
      res.status(200).send({
        message: "New user has been created successfully",
        OTP: +otp,
        phoneNo,
        firstName: firstName || "user",
        lastName: lastName || "user",
      });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const Userlogin = async (req, res) => {
  const { phoneNo } = req.body;

  try {
    const existinguser = await UserModel.findOne({ phoneNo });
    if (existinguser) {
      res.status(200).send({
        message: "Enter your OTP",
        OTP: existinguser.tempOtp,
        phoneNo,
        firstName: existinguser.firstName || "user",
        lastName: existinguser.lastName || "user",

      });
    } else {
      res.status(400).send({ message: "Please Signup first" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const validateOtp = async (req, res) => {
  const { phoneNo, tempOtp } = req.body;

  try {
    const user = await UserModel.findOne({ phoneNo });
    if (user.tempOtp === tempOtp) {
      res.status(200).send({
        message: "Login success",
        token: jwt.sign({ userID: user._id }, "meesho"),
      });
    } else {
      res.status(400).send({ message: "Invalid OTP" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await UserModel.findByIdAndUpdate({ _id: id }, data);
    res.status(200).send({ message: "User data has been updated" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { registerUser, validateOtp, updateUser,Userlogin };
