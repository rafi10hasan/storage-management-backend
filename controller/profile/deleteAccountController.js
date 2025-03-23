const { deleteAccount } = require("../../services/profile/delete-account");

const deleteAccountController = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = await deleteAccount(userId);
    if (user.deletedCount > 0) {
      res.status(201).json({ success: true, message: "user deleted succesfully!" });
    } else {
      res.status(401).json({ success: false, message: "unauthorized user" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { deleteAccountController };
