const checkVerifyOtp = require("../../services/auth/Check-verify-otp");


async function verifyOTPController(req, res,next) {
  const id = req.params;
  const { otp } = req.body;

  try {
    const isVerifyOtp = await checkVerifyOtp(id, otp);
    
    if (isVerifyOtp) {
      res.status(200).json({ success: true,message:"your otp is correct! now you can reset your password" });
    } else {
      res.status(400).json({ success:false, message: "invalid otp" });
    }
  } catch (error) {
    next(error)
  }
}

module.exports = { verifyOTPController };
