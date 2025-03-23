const { mongoose } = require("mongoose");
const User = require("../../models/user-model");
const { createError } = require("../../errors/create-error");

async function checkVerifyOtp(id, otp) {
  try {
    const objectId = new mongoose.Types.ObjectId(id);

    const user = await User.findOne({ _id: objectId });
    if (!user) {
       throw createError("user not found",404)
    }
    if(!otp){
      throw createError("otp is required",400)
    }
    if (user.otp === otp) {
      await User.updateOne(
        { _id: objectId }, 
        { $unset: { otp: "" } } 
      );
      return true;
    }
    return false;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = checkVerifyOtp;
