const { deleteFile } = require("../../services/file/deleteFile");


const deleteFileController = async (req, res, next) => {
  const { fileId } = req.params;

  try {
    const deletedFile = await deleteFile(fileId);
    if (deletedFile.deletedCount) {
      res.status(200).json({ message: "file has been deleted succesfully!", data:deletedFile });
    } else {
      res.status(404).json({ message: "file error" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { deleteFileController };
