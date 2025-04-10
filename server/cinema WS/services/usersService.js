const usersRepo = require('../repositories/usersRepo');
const usersDataRepo = require('../repositories/usersDataRepo');
const permissionsRepo = require('../repositories/permissionsRepo');

const getAllUsers = async () => {//todo: see if filters relevant
    const allUsers = await usersRepo.getAllUsers();
    const usersData = await usersDataRepo.getUsers();
    const permissions = await permissionsRepo.getPermissions();

    const users = allUsers.map(({ password, ...rest }) => rest);

    const usersMap = Object.fromEntries(users.map(user => [user.id, user]));
    const permissionsMap = Object.fromEntries(permissions.map(permission => [permission.id, permission]));

    const merged = usersData.map(user => ({
    ...user,
    ...usersMap[user.id],
    ...permissionsMap[user.id]
    }));
  
    return merged;
};

const getUsersLoginInfo = () => {
  return usersRepo.getAllUsers();
};

const getById = async (id) => {//todo: see if i'm using all the functions
    const usersData = await usersDataRepo.getUsers();
    const permissions = await permissionsRepo.getPermissions();

    const userData = usersData.find(user => user.id == id);
    const userPermissions = permissions.find(user => user.id == id);
    const userName = usersRepo.getById(id).userName;

    const merged = {
        ...userData,
        ...userPermissions,
        userName
    };
      
    return merged;
};

/******To Do*****/
const addUser = async (obj) => {
    const user = await usersRepo.addUser(obj);
    
  return moviesRepo.addMovie(obj);
};

const updateUser = (id, obj) => {
  return moviesRepo.updateMovie(id, obj);
};

const deleteUser = (id) => {
  return moviesRepo.deleteMovie(id);
};

module.exports = {
  getAllUsers,
  getUsersLoginInfo,
  getById,
  addUser,
  updateUser,
  deleteUser
};