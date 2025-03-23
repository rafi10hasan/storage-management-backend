const { createError } = require("../../errors/create-error");
const { sendOtpToEmail } = require("../../lib/sendOtpToEmail");
const User = require("../../models/user-model");
const { generateOTP } = require("../../utils/generateOtp");

async function verifyEmailAndSendOtp(email) {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw createError("user not found", 404);
    }

    const otp = generateOTP();
    const emailsToSend = {
      to: email,
      subject: `OTP VERIFICATION...`,
      message: `Your OTP is ${otp}`,
    };
    await sendOtpToEmail(emailsToSend);

    user.otp = otp;
    await user.save();
    return true;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { verifyEmailAndSendOtp };
