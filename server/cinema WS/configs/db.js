const mongoose = require('mongoose');

const connectDB = () => {
  // Connect to MongoDB database
  mongoose
    .connect(`mongodb://127.0.0.1:27017/usersDB`)
    .then(() => console.log('Connected to usersDB'))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
