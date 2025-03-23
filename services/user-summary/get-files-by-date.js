const { createError } = require("../../errors/create-error");
const File = require("../../models/file-model");

async function getFilesByDate(userId, selectedDate) {
  try {
    // Convert targetDate to Date object
     if(selectedDate === undefined){
        throw createError("specific date is required",400)
     }
    const startOfDay = new Date(`${selectedDate}T00:00:00.000Z`);
    const endOfDay = new Date(`${selectedDate}T23:59:59.999Z`);

    console.log("Start of Day:", startOfDay);
    console.log("End of Day:", endOfDay);

    // Query MongoDB
    const files = await File.find({
        userId,
      createdAt: { $gte: startOfDay, $lt: endOfDay }
    });

    return files;
  } catch (err) {
    if (!err.isOperational) {
        throw new Error("Unexpected error", err);
      }
      throw err;
  }
}

module.exports = { getFilesByDate };
