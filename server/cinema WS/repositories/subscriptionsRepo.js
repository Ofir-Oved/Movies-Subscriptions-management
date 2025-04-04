const axios = require('axios');

const SUBSCRIPTIONS_URL = 'http://localhost:3000/subscriptions';

//get all
const getAllSubscriptions = () => {//todo: see if i'm using all the functions
  return axios.get(SUBSCRIPTIONS_URL);
};

//get by id
const getSubscriptionById = (id) => {
  return axios.get(`${SUBSCRIPTIONS_URL}/${id}`);
};

//add
const addSubscription = (subscription) => {
  return axios.post(SUBSCRIPTIONS_URL, subscription);
};

//update
const updateSubscription = (id, updatedData) => {
  return axios.patch(`${SUBSCRIPTIONS_URL}/${id}`, updatedData);
};

//delete
const deleteSubscription = (id) => {
  return axios.delete(`${SUBSCRIPTIONS_URL}/${id}`);
};

module.exports = { 
  getAllSubscriptions,
  getSubscriptionById,
  addSubscription,
  updateSubscription,
  deleteSubscription 
};