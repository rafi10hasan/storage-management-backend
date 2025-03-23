const { mongoose } = require("mongoose");
const File = require("../../models/file-model");
const { createError } = require("../../errors/create-error");

const deleteFile = async (fileId) => {
  try {

    const deletedFile = await File.deleteOne({ _id: fileId });

    if (deletedFile.deletedCount < 1) {
      throw createError("file not found", 404);
    }
    
    return deletedFile;
  } catch (err) {
    if (!err.isOperational) {
      throw new Error("Unexpected error in room service:", err);
    }
    throw err;
  }
};

module.exports = { deleteFile };
