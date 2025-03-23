const { mongoose } = require("mongoose");
const { createError } = require("../../errors/create-error");
const File = require("../../models/file-model");
const User = require("../../models/user-model");
const getFileType = require("../../utils/getFileType");

async function saveFile(userId, file) {
  const objectId = new mongoose.Types.ObjectId(userId);
  try {
    const user = await User.findById(objectId);
    if (!user) {
      throw createError("user not found", 404);
    }
    if(!file){
        throw createError("file upload is required",400)
    }
    const fileType = getFileType(file.originalname);

    const fileObj = {
      userId: userId, // Assuming user ID comes from authentication middleware
      filename: file.originalname,
      fileType: fileType,
      size: file.size,
    };

    const newFile = await File.create(fileObj);

    return newFile;
  } catch (err) {
    if (!err.isOperational) {
      throw new Error("Unexpected error", err);
    }
    throw err;
  }
}

module.exports = { saveFile };
