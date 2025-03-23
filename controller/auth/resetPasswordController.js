const { resetPassword } = require("../../services/auth/reset-password");


async function resetPasswordController(req, res, next) {
  const { id } = req.params;
  const { newPassword } = req.body;
  try {
    const result = await resetPassword(id, newPassword);
    if (result) {
      res.status(200).json({ success: true,message:"password reset successfully" });
    } else {
      res.status(404).json({ success:false,message:"user not found" });
    }
  } catch (error) {
   next(error)
  }
}
module.exports = {resetPasswordController};
