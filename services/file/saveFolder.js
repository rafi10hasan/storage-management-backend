const { mongoose } = require("mongoose");
const { createError } = require("../../errors/create-error");
const File = require("../../models/file-model");
const User = require("../../models/user-model");

async function saveFolder(userId, folderName) {
  const objectId = new mongoose.Types.ObjectId(userId);
  try {
    const user = await User.findById(objectId);
    if (!user) {
      throw createError("user not found", 404);
    }
    if(folderName === undefined){
        throw createError("folder name is required",400)
    }
    
    const folderObj = {
      userId: userId,
      filename: folderName,
      fileType: "folder",
      size: Math.floor(10000 + Math.random() * 90000),
    };

    const newFolder = await File.create(folderObj);
    return newFolder;
  } catch (err) {
    if (!err.isOperational) {
      throw new Error("Unexpected error", err);
    }
    throw err;
  }
}

module.exports = { saveFolder };
