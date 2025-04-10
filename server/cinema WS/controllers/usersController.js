const express = require('express');
const usersService = require('../services/usersService');

const router = express.Router();

// Entry point: http://localhost:3000/users

// Get All Users
router.get('/', async (req, res) => {//todo: see if i'm using all the functions
  try {
    const filters = req.query;//see if relevant
    const users = await usersService.getAllUsers(filters);
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

// Get All Users login info
router.get('/login', async (req, res) => {
  try {
    const users = await usersService.getUsersLoginInfo();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

// Get a user By ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersService.getById(id);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

// Add a new user
router.post('/', async (req, res) => {
  try {
    const obj = req.body;
    const result = await usersService.addUser(obj);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Update user
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await usersService.updateUser(id, obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

// Delete user
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await usersService.deleteUser(id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
