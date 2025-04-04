const axios = require('axios');

const MEMBERS_URL = 'http://localhost:3000/members';

//get all
const getAllMembers = () => {//todo: see if i'm using all the functions
  return axios.get(MEMBERS_URL);
};

//get by id
const getMemberById = (id) => {
  return axios.get(`${MEMBERS_URL}/${id}`);
};

//add
const addMember = (member) => {
  return axios.post(MEMBERS_URL, member);
};

//update
const updateMember = (id, updatedData) => {
  return axios.patch(`${MEMBERS_URL}/${id}`, updatedData);
};

//delete
const deleteMember = (id) => {
  return axios.delete(`${MEMBERS_URL}/${id}`);
};

module.exports = { 
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember 
};