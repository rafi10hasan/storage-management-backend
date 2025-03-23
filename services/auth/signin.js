const bcrypt = require('bcrypt');
const User = require("../../models/user-model");

const { createError } = require('../../errors/create-error');

const checkUserExist = async (credentials) => {
  try {
    const user = await User.findOne({ email: credentials.email });
    if (!user) {
      throw createError('user not found',404)
    }
    
    const isMatch = await bcrypt.compare(credentials.password, user.password);
    console.log(isMatch)
    if (isMatch) {
        const authenticatedUser = {
            id: user._id,
            userName: user.userName,
            email: user.email,
        };
      
     
      return authenticatedUser; 
    } else {
      return null; 
    }
  } catch (err) {
    if (!err.isOperational) {
      throw new Error('Unexpected error in user service:', err);
    }
    throw err;
  }
};

module.exports = { checkUserExist };
