const { cloneFile } = require("../../services/file/cloneFile");

const copyFileController = async (req, res, next) => {
  const { fileId } = req.params;
  console.log('asd',fileId);
  try {
    const copiedFile = await cloneFile(fileId, type = "copy");
    console.log(copiedFile);
    if (copiedFile._id) {
      res.status(201).json({succes:true, message: "file has been copied succesfully!" });
    } else {
      res.status(404).json({ message: "file error" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { copyFileController };
