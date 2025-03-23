const { mongoose } = require("mongoose");
const File = require("../../models/file-model");
const { createError } = require("../../errors/create-error");

const renameFileName = async (fileId, newFilename) => {
  try {
    if (!newFilename) {
      throw createError("New filename is required",400) 
    }

    // Find and update the file
    const updatedFile = await File.findByIdAndUpdate(
      fileId,
      { filename: newFilename },
      { new: true }
    );

    if (!updatedFile) {
      throw createError("file not found",404)
    }

    return updatedFile
  } catch (err) {
    if (!err.isOperational) {
        throw new Error('Unexpected error in room service:', err);
      }
      throw err;
  }
};

module.exports = { renameFileName };
