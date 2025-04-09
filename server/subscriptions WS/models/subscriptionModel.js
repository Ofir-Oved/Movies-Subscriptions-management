const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, 
    memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
    movies: [{movieId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }, date: Date }]
  },
  { versionKey: false }
);

const Subscription = mongoose.model('subscription', subscriptionSchema);

module.exports = Subscription;