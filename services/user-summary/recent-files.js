const File = require("../../models/file-model");


async function recentFiles(userId){
    try {
        const recentFiles = await File.find({ userId }).sort({ createdAt: -1 }).limit(10);
        return recentFiles
    } catch (err) {
        if (!err.isOperational) {
            throw new Error("Unexpected error", err);
          }
          throw err;
    }
}

module.exports = recentFiles