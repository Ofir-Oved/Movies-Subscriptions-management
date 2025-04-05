const subscriptionsRepo = require('../repositories/subscriptionsRepo');

const getAllSubscriptions = (filters) => {//todo: see if filters relevant
  return subscriptionsRepo.getAllSubscriptions(filters);
};

const getById = (id) => {//todo: see if i'm using all the functions
  return subscriptionsRepo.getById(id);
};

const addSubscription = (obj) => {
  return subscriptionsRepo.addSubscription(obj);
};

const updateSubscription = (id, obj) => {
  return subscriptionsRepo.updateSubscription(id, obj);
};

const deleteSubscription = (id) => {
  return subscriptionsRepo.deleteSubscription(id);
};

module.exports = {
  getAllSubscriptions,
  getById,
  addSubscription,
  updateSubscription,
  deleteSubscription,
};