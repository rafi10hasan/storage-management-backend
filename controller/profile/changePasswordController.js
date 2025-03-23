
const { changePassword } = require("../../services/profile/change-password");


const changePasswordController = async (req, res, next) => {
 
    const {userId} = req.params;
    const {currentPassword,newPassword} = req.body
 
  try {
    const isUpdatePassword = await changePassword(userId,currentPassword,newPassword);
    if (isUpdatePassword) {
      res.status(201).json({success:true, message:"password changed succesfully!"});
    } else {
      res.json({success:false, message:"invalid credential"});
    }
  } catch (err) {
    next(err)
  }
};

module.exports = { changePasswordController };
