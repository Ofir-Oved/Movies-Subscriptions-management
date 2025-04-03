const Movie = require('../models/movieModel');

// Get All
const getAllMovies = (filters) => {//todo: see if filters relevant
  return Movie.find(filters);
};

// Get By ID
const getById = (id) => {//todo: see if i'm using all the functions
  return Movie.findById(id);
};

// Get By APIid
const getByAPIId = (apiId) => {//todo: see if i'm using all the functions
  return Movie.findOne(apiId);
};

// Create
const addMovie = (obj) => {
  const movie = new Movie(obj);
  return movie.save();
};

// Update
const updateMovie = (id, obj) => {
  return Movie.findByIdAndUpdate(id, obj);
};

// Delete
const deleteMovie = (id) => {
  return Movie.findByIdAndDelete(id);
};

module.exports = {
  getAllMovies,
  getById,
  getByAPIId,
  addMovie,
  updateMovie,
  deleteMovie,
};
