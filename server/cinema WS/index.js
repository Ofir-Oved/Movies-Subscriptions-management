const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');

const usersRouter = require('./controllers/usersController');
const membersRouter = require('./controllers/membersController');
const moviesRouter = require('./controllers/moviesController');
const subscriptionsRouter = require('./controllers/subscriptionsController');

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());

app.use('/', express.json());

app.use('/users', usersRouter); 
app.use('/members', membersRouter); 
app.use('/movies', moviesRouter); 
app.use('/subscriptions', subscriptionsRouter); 

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
