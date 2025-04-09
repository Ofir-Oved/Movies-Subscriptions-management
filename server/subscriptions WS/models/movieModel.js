const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, 
    apiId: Number, 
    name: { type: String, required: true },
    genres: [String],
    image: String,
    premiered: Date
  },
  { versionKey: false }
);

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;