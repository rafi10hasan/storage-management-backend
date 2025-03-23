const { renameFileName } = require("../../services/file/renameFile");

const renameFileController = async (req, res, next) => {
  const { fileId } = req.params;
  const { newFilename } = req.body; 
  try {
    const updatedFile = await renameFileName(fileId,newFilename);
    if (updatedFile._id) {
      res.status(201).json({ message: "file has been renamed succesfully!" });
    } else {
      res.json({ message: "file error" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { renameFileController };
