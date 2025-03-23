const { mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
  userName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  image: {
    required: false,
    type: String,
    default: "",
  },
  storageLimit: { type: Number, required: false, default: 15360000 }, // 15 GB in KB
  usedStorage: { type: Number, required: false, default: 0 },
  otp: {
    required: false,
    type: Number,
  },
});

const User = mongoose.models.User ?? mongoose.model("User", userSchema);

module.exports = User;
