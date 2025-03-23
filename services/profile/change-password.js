const { createError } = require("../../errors/create-error");
const User = require("../../models/user-model")
const bcrypt = require("bcrypt");

async function changePassword(userId,currentPassword,newPassword){
    try {
        const user = await User.findById(userId);
        if(!user){
            throw createError("user not found",404)
        }
        if(currentPassword === undefined || newPassword === undefined){
            throw createError("current password and new apassword are required",400)
        }
        const isMatch = await bcrypt.compare(currentPassword,user.password);
        
        if(!isMatch){
            throw createError("current password don't match",400)
        }
        const hashedPassword = await bcrypt.hash(newPassword,10);
        user.password = hashedPassword;
        await user.save();

         return true
    } catch (err) {
        if (!err.isOperational) {
            throw new Error("Unexpected error", err);
          }
          throw err;
    }
}

module.exports = {changePassword}