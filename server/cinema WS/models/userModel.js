const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, 
    userName: { type: String, required: true },
    password: String
  },
  { versionKey: false }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
