const { userFileUsageSummary } = require("../../services/user-summary/user-summary");



const summaryController = async (req, res,next) => {
  const {userId} = req.params;
  
  try {
    const storage = await userFileUsageSummary(userId);
    if (storage) {
      res.status(200).json({succes:true,storage});
    } else {
      res.status(400).json("storage not found");
    }
  } catch (err) {
    next(err)
  }
};

module.exports = { summaryController };
