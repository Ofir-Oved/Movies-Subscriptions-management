const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, 
    apiId: Number, 
    name: { type: String, required: true },
    email: String,
    city: String
  },
  { versionKey: false }
);

const Member = mongoose.model('member', memberSchema);

module.exports = Member;
