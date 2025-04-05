const express = require('express');
const moviesService = require('../services/moviesService');

const router = express.Router();

// Entry point: http://localhost:3000/movies - see if correct

// Get All Movies
router.get('/', async (req, res) => {//todo: see if i'm using all the functions
  try {
    const filters = req.query;//see if relevant
    const movies = await moviesService.getAllMovies(filters);
    res.json(movies);
  } catch (error) {
    res.json(error);
  }
});

// Get a movie By ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await moviesService.getById(id);
    res.json(movie);
  } catch (error) {
    res.json(error);
  }
});

// Add a new movie
router.post('/', async (req, res) => {
  try {
    const obj = req.body;
    const result = await moviesService.addMovie(obj);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Update a movie
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await moviesService.updateMovie(id, obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

// Delete movie
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await moviesService.deleteMovie(id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
