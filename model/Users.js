const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.UUID, default: () => uuid() },
  name: String,
  email: {
    type: String,
    require: true,
    maxlength: 320,
    trim: true,
    lowercase: true,
  },
  passowrd: {
    type: String,
    require: true,
    maxLength: 30,
  },
  phone: {
    type: Number,
    minLength: 10,
    maxLength: 10,
  },
  createdAt: { type: Date, default: Date.now },
});

//           mongoose.model(Collection Name)
const User = mongoose.model("user1", userSchema);

module.export = User;
