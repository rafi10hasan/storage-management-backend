const { getFileList } = require("../../services/file/getFileList");

const fileListController = async (req, res, next) => {
  const { userId } = req.params;
  const { fileType } = req.body;
  try {
    const fileList = await getFileList(userId, fileType);

    if (fileList.length > 0) {
      res.status(200).json({
        success: true,
        message: "File List retrieved successfully",
        data: fileList,
      });
    } else {
      res.status(404).json({ message: "files are not found" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { fileListController };
