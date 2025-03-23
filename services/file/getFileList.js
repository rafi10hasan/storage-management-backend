
const { createError } = require("../../errors/create-error");
const File = require("../../models/file-model");

async function getFileList(userId,fileType) {
    
  try {
    if(!fileType){
        throw createError("file type is required",400)
    }
    const fileList = await File.find({ userId:userId, fileType:fileType }).lean();
    return fileList;
  } catch (err) {
    if (!err.isOperational) {
      throw new Error("Unexpected error", err);
    }
    throw err;
  }
}

module.exports = { getFileList };
