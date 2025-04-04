const axios = require('axios');

const MOVIES_URL = 'http://localhost:3000/movies';

//get all
const getAllMovies = () => {//todo: see if i'm using all the functions
  return axios.get(MOVIES_URL);
};

//get by id
const getMovieById = (id) => {
  return axios.get(`${MOVIES_URL}/${id}`);
};

//add
const addMovie = (movie) => {
  return axios.post(MOVIES_URL, movie);
};

//update
const updateMovie = (id, updatedData) => {
  return axios.patch(`${MOVIES_URL}/${id}`, updatedData);
};

//delete
const deleteMovie = (id) => {
  return axios.delete(`${MOVIES_URL}/${id}`);
};

module.exports = { 
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie
};