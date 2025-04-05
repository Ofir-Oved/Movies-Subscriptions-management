const express = require('express');
const subscriptionsService = require('../services/subscriptionsService');

const router = express.Router();

// Entry point: http://localhost:3000/subscriptions - see if correct

// Get All Subscriptions
router.get('/', async (req, res) => {//todo: see if i'm using all the functions
  try {
    const filters = req.query;//see if relevant
    const subscriptions = await subscriptionsService.getAllSubscriptions(filters);
    res.json(subscriptions);
  } catch (error) {
    res.json(error);
  }
});

// Get a Subscription By ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const subscription = await subscriptionsService.getById(id);
    res.json(subscription);
  } catch (error) {
    res.json(error);
  }
});

// Add a new subscription
router.post('/', async (req, res) => {
  try {
    const obj = req.body;
    const result = await subscriptionsService.addSubscription(obj);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Update a subscription
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await subscriptionsService.updateSubscription(id, obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

// Delete subscription
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await subscriptionsService.deleteSubscription(id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
