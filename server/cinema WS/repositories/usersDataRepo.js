const jfile = require('jsonfile');

const FILE = 'data/users.json';

const getUsers = () => {//todo: see if i'm using all the functions
  return jfile.readFile(FILE);
};

const setUsers = (users) => {
    jfile.writeFile(FILE, users);
};

module.exports = {
  getUsers,
  setUsers
};
