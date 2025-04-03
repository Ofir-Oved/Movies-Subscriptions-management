const membersRepo = require('../repositories/membersRepo');

const getAllMembers = (filters) => {//todo: see if filters relevant
  return membersRepo.getAllMembers(filters);
};

const getById = (id) => {//todo: see if i'm using all the functions
  return membersRepo.getById(id);
};

const addMember = (obj) => {
  return membersRepo.addMember(obj);
};

const updateMember = (id, obj) => {
  return membersRepo.updateMember(id, obj);
};

const deleteMember = (id) => {
  return membersRepo.deleteMember(id);
};

module.exports = {
  getAllMembers,
  getById,
  addMember,
  updateMember,
  deleteMember,
};