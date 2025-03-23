const { mongoose } = require("mongoose");
const { createError } = require("../../errors/create-error");
const File = require("../../models/file-model");

async function cloneFile(fileId, type) {
  const objectId = new mongoose.Types.ObjectId(fileId);

  try {
    const file = await File.findById(objectId);

    if (!file) {
      throw createError("file not found", 404);
    }
    console.log(type)
    const fileObj = {
      userId: file.userId,
      filename: type === "copy" ? `copy_of_${file.filename}` : file.filename,
      fileType: file.fileType,
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

module.exports = { cloneFile };
