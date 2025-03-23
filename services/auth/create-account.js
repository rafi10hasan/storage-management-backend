const { createError } = require('../../errors/create-error');
const User = require('../../models/user-model')
const bcrypt = require("bcrypt");

const createUser = async (user) => {
  const { userName, email, password } = user;
  
  try {
    const isExistUser = await User.findOne({ email: email });
    if (isExistUser) {
        throw createError("user has been already exist",400)
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
     
      const newUser = {
        userName,
        email,
        password: hashedPassword,
      };
      const newUserData = await User.create(newUser);
 
      return newUserData;
    }
  } catch (err) {
    if (!err.isOperational) {
      throw new Error('Unexpected error in user service:', err);
    }
    throw err;
  }
};

module.exports = { createUser };
