const { verifyPassword } = require("../../services/file/verify-password");


const privateFileController = async (req, res, next) => {
  const { userId } = req.params;
  const {password} = req.body
  try {
    const isVerified = await verifyPassword(userId,password);
    if (isVerified) {
      res.status(200).json({ success: true, message: "private file accessed succesfully!" });
    } else {
      res.status(400).json({ message: "invalid credential" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { privateFileController };
