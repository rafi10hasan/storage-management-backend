const { mongoose } = require("mongoose");
const { createError } = require("../../errors/create-error");
const File = require("../../models/file-model");

async function addOrRemoveFavouriteFile(fileId,favourite) {
  const objectId = new mongoose.Types.ObjectId(fileId);

  try {
    if(favourite === undefined){
      throw createError("favourite is required",400)
    }
    const file = await File.findById(objectId);

    if (!file._id) {
      throw createError("file not found", 404);
    }
    const updatedFile =  await File.findByIdAndUpdate(fileId, { isFavourite:favourite });
    return updatedFile
  } catch (err) {
    if (!err.isOperational) {
      throw new Error("Unexpected error", err);
    }
    throw err;
  }
}

module.exports = { addOrRemoveFavouriteFile };
