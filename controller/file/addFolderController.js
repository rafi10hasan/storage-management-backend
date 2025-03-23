const { saveFolder } = require("../../services/file/saveFolder");


const addFolderController = async (req, res, next) => {
  const { userId } = req.params;
  const {folderName} = req.body
  try {
    const newFolder = await saveFolder(userId, folderName);
    if (newFolder._id) {
      res.status(201).json({ success: true, message: "folder has been created succesfully!" });
    } else {
      res.json({ message: "file error" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { addFolderController };
