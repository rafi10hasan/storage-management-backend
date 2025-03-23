
const File = require("../../models/file-model");

async function getFavouritesFile(userId) {
    
  try {
    const favourites = await File.find({ userId:userId, isFavourite: true }).lean();
    return favourites;
  } catch (err) {
    if (!err.isOperational) {
      throw new Error("Unexpected error", err);
    }
    throw err;
  }
}

module.exports = { getFavouritesFile };
