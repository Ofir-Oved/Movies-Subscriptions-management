const axios = require('axios');

const SUBSCRIPTIONS_URL = 'http://localhost:3000';

const getAllSubscriptions = () => {//todo: see if i'm using all the functions
  return axios.get(SUBSCRIPTIONS_URL);
};

module.exports = { getAllSubscriptions };