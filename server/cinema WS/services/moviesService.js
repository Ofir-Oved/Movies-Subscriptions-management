const moviesRepo = require('../repositories/moviesRepo');

const getAllMovies = (filters) => {//todo: see if filters relevant
  return moviesRepo.getAllMovies(filters);
};

const getById = (id) => {//todo: see if i'm using all the functions
  return moviesRepo.getById(id);
};

const addMovie = (obj) => {
  return moviesRepo.addMovie(obj);
};

const updateMovie = (id, obj) => {
  return moviesRepo.updateMovie(id, obj);
};

const deleteMovie = (id) => {
  return moviesRepo.deleteMovie(id);
};

module.exports = {
  getAllMovies,
  getById,
  addMovie,
  updateMovie,
  deleteMovie,
};