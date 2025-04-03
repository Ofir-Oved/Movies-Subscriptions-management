const jfile = require('jsonfile');

const FILE = 'data/permissions.json';

const getPermissions = () => {//todo: see if i'm using all the functions
  return jfile.readFile(FILE);
};

const setPermissions = (permissions) => {
    jfile.writeFile(FILE, permissions);
};

module.exports = {
  getPermissions,
  setPermissions
};
