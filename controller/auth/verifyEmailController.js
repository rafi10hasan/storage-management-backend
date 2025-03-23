const { verifyEmailAndSendOtp } = require("../../services/auth/verifyEmailAndSendOtp");


  async function verifyEmailController(req, res, next) {
    const { email } = req.body;
    try {
      const isVerifyEmail = await verifyEmailAndSendOtp(email);
     
      if (isVerifyEmail) {
        res.status(200).json({ success: true,message:`send otp to ${email}` });
      } else {
        res.status(401).json("unauthorized user");
      }
    } catch (err) {
      next(err)
    }
  }
  
  module.exports = { verifyEmailController};
  