const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const userSchema = new mongoose.Schema({
  _id: { type: String, default: () => uuid() },
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    maxlength: 320,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxLength: 30,
  },
  phone: {
    type: Number,
    min: 1000000000,
    max: 9999999999,
  },
  createdAt: { type: Date, default: Date.now },
});

//           mongoose.model(Collection Name)
const User = mongoose.model("user1", userSchema);

module.exports = User;
