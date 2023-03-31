const { UserModel } = require("../Model/user.model");
var jwt = require("jsonwebtoken");
const { AdminModel } = require("../Model/admin.model");
function OTPgenrator(otp_length) {
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < otp_length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

const registerAdmin = async (req, res) => {
  const { phoneNo, role } = req.body;
  const otp = OTPgenrator(6);
  try {
    const existinguser = await AdminModel.findOne({ phoneNo });

    if (existinguser) {
      res.status(200).send({
        message: "User already exists",
        OTP: existinguser.tempOtp,
        phoneNo,
      });
    } else {
      if (role == "admin") {
        req.body.tempOtp = otp;
        const newUser = new AdminModel(req.body);
        await newUser.save();
        res.status(200).send({
          message: "New user has been created successfully",
          OTP: +otp,
          phoneNo,
        });
      } else {
        res
          .status(400)
          .send({ message: "You are not authorized to enter admin dashboard" });
      }
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const validateOtpforAdmin = async (req, res) => {
  const { phoneNo, tempOtp } = req.body;

  try {
    const user = await AdminModel.findOne({ phoneNo });
    if (user.tempOtp === tempOtp) {
      res.status(200).send({
        message: "Login success",
        token: jwt.sign({ userID: user._id }, "meeshoAdmin"),
      });
    } else {
      res.status(400).send({ message: "Invalid OTP" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await AdminModel.findByIdAndUpdate({ _id: id }, data);
    res.status(200).send({ message: "User data has been updated" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { registerAdmin, validateOtpforAdmin, updateAdmin };
