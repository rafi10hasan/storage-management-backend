const { cloneFile } = require("../../services/file/cloneFile");

const duplicateFileController = async (req, res, next) => {
  const { fileId } = req.params;
  console.log(fileId);
  try {
    const duplicateFile = await cloneFile(fileId, (type = "duplicate"));
    if (duplicateFile._id) {
      res.status(201).json({ message: "file has been duplicated succesfully!" });
    } else {
      res.status(404).json({ message: "file not found" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { duplicateFileController };
