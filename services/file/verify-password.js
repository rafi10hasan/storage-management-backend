const { createError } = require("../../errors/create-error");
const User = require("../../models/user-model");
const bcrypt = require("bcrypt")
async function verifyPassword(userId, password) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw createError("user not found", 404);
    }
    console.log(password)
    if(password === undefined){
        throw createError("password data required", 400);
    }
    const isMatch = await bcrypt.compare(password, user.password);

    return isMatch;
  } catch (err) {
    if (!err.isOperational) {
      throw new Error("Unexpected error in user service:", err);
    }
    throw err;
  }
}

module.exports = { verifyPassword };
