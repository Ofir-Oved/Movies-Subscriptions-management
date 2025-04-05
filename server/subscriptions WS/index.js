const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');

const membersRouter = require('./controllers/membersController');
const moviesRouter = require('./controllers/moviesController');
const subscriptionsRouter = require('./controllers/subscriptionsController');

const { fetchAndStoreMembers } = require('./services/membersDataInitService');
const { fetchAndStoreMovies } = require('./services/moviesDataInitService');

const app = express();
const PORT = 5000;

const startServer = async () => {
    try {
        connectDB();
        console.log("Connected to MongoDB");

        // Fetch initial data from external APIs
        await fetchAndStoreMembers();
        await fetchAndStoreMovies();
        console.log("Initial data fetched and stored.");

        app.use(cors());
        app.use(express.json());

        app.use('/members', membersRouter);
        app.use('/movies', moviesRouter);
        app.use('/subscriptions', subscriptionsRouter);

        app.listen(PORT, () => {
        console.log(`App is listening at http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("Error during server initialization:", error);
        process.exit(1); // Exit process if startup fails
    }
};

startServer();

