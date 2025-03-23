const { mongoose, Schema } = require("mongoose");

const fileSchema = new Schema({
  userId: { type: Schema.ObjectId, required: true, ref: "User" },
  filename: { type: String, required: true },
  fileType: { type: String, required: true, enum: ["folder", "note", "image", "pdf"] },
  size: { type: Number, required: true },
  isFavourite: { type: Boolean, default: false, required: false },
  createdAt: { type: Date, default: Date.now },
});
const File = mongoose.models.File ?? mongoose.model("File", fileSchema);
module.exports = File;
