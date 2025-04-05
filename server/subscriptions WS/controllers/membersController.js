const express = require('express');
const membersService = require('../services/membersService');

const router = express.Router();

// Entry point: http://localhost:5000/members - see if correct

// Get All Members
router.get('/', async (req, res) => {//todo: see if i'm using all the functions
  try {
    const filters = req.query;//see if relevant
    const members = await membersService.getAllMembers(filters);
    res.json(members);
  } catch (error) {
    res.json(error);
  }
});

// Get a Member By ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const member = await membersService.getById(id);
    res.json(member);
  } catch (error) {
    res.json(error);
  }
});

// Add a new member
router.post('/', async (req, res) => {
  try {
    const obj = req.body;
    const result = await membersService.addMember(obj);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Update a member
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await membersService.updateMember(id, obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

// Delete member
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await membersService.deleteMember(id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
