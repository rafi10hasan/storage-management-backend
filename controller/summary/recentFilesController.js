const recentFiles = require("../../services/user-summary/recent-files");

const recentFilesController = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const fileList = await recentFiles(userId);
    if (fileList.length > 0) {
      res.status(200).json({ succes: true, data: fileList });
    } else {
      res.status(400).json("files are not found");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { recentFilesController };
