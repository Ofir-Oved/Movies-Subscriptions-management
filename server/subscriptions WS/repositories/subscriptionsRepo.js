const Subscription = require('../models/subscriptionModel');

// Get All
const getAllSubscriptions = (filters) => {//todo: see if filters relevant
  return Subscription.find(filters);
};

// Get By ID
const getById = (id) => {//todo: see if i'm using all the functions
  return Subscription.findById(id);
};

// Create
const addSubscription = (obj) => {
  const subscription = new Subscription(obj);
  return subscription.save();
};

// Update
const updateSubscription = (id, obj) => {
  return Subscription.findByIdAndUpdate(id, obj);
};

// Delete
const deleteSubscription = (id) => {
  return Subscription.findByIdAndDelete(id);
};

module.exports = {
  getAllSubscriptions,
  getById,
  addSubscription,
  updateSubscription,
  deleteSubscription,
};
