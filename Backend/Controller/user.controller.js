const { UserModel } = require("../Model/user.model");

function OTPgenrator(otp_length) {
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < otp_length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

const registerUser = async (req, res) => {
  const { phoneNo } = req.body;
  try {
    const existinguser = await UserModel.findOne({ phoneNo });
    if (existinguser) {
        
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
