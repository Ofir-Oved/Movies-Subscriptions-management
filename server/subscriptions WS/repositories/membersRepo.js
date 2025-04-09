const Member = require('../models/memberModel');

// Get All
const getAllMembers = (filters) => {//todo: see if filters relevant
  return Member.find(filters);
};

// Get By ID
const getById = (id) => {//todo: see if i'm using all the functions
  return Member.findById(id);
};

// Get By APIid
const getByAPIId = (apiId) => {//todo: see if i'm using all the functions
  return Member.findOne({apiId});
};

// Create
const addMember = (obj) => {
  const member = new Member(obj);
  return member.save();
};

// Update
const updateMember = (id, obj) => {
  return Member.findByIdAndUpdate(id, obj);
};

// Delete
const deleteMember = (id) => {
  return Member.findByIdAndDelete(id);
};

module.exports = {
  getAllMembers,
  getById,
  getByAPIId,
  addMember,
  updateMember,
  deleteMember,
};
