const { mongoose } = require("mongoose");
const { createError } = require("../../errors/create-error");
const File = require("../../models/file-model");
const User = require("../../models/user-model");

async function userFileUsageSummary(userId) {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw createError("user not found", 404);
    }

    const result = await File.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      {
        $group: {
          _id: "$fileType",
          totalSize: { $sum: "$size" },
          totalItems: { $sum: 1 },
        },
      },
    ]);
    console.log(result);
    const formattedData = {
      folder: { totalSize: 0, totalItems: 0 },
      note: { totalSize: 0, totalItems: 0 },
      image: { totalSize: 0, totalItems: 0 },
      pdf: { totalSize: 0, totalItems: 0 },
    };

    result.forEach((item) => {
      formattedData[item._id] = {
        totalSize: Number((item.totalSize / 1024 / 1024).toFixed(2)), // Total size in kb to gb
        totalItems: item.totalItems,
      };
    });

    const { folder, note, image, pdf } = formattedData;
    const totalUsage = folder.totalSize + note.totalSize + image.totalSize + pdf.totalSize;
    const availableStorage = Number((user.storageLimit / 1024 / 1024 - totalUsage).toFixed(2));
    user.usedStorage = totalUsage;
    await user.save();

    const updatedData = Object.fromEntries(
      Object.entries(formattedData).map(([key, value]) => [
        key,
        { ...value, totalSize: `${value.totalSize} GB` },
      ])
    );

    return {
      storageLimit: "15.36 GB",
      usageStorage: `${totalUsage} GB`,
      availableStorage: `${availableStorage} GB`,
      storageUsage: updatedData,
    };
  } catch (err) {
    if (!err.isOperational) {
      throw new Error("Unexpected error", err);
    }
    throw err;
  }
}

module.exports = { userFileUsageSummary };
