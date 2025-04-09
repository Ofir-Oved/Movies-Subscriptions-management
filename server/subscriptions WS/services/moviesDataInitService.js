const axios = require('axios');
const moviesRepo = require('../repositories/moviesRepo');

const MOVIES_URL = "https://api.tvmaze.com/shows";

const fetchAndStoreMovies = async () => {
    try {
        console.log("Fetching movies from tvmaze API...");
        const {data: movies} = await axios.get(MOVIES_URL);

        for (const movie of movies) {
            const existingMovie = await moviesRepo.getByAPIId(movie.id);
            if (!existingMovie) {
                await moviesRepo.addMovie({ apiId: movie.id, name: movie.name, genres: movie.genres, image: movie.image.medium, premiered: movie.premiered });
            }
        }

        console.log("Movies data initialization complete.");
    } catch (error) {
        console.error("Error fetching or storing movies:", error);
    }
};

module.exports = { fetchAndStoreMovies };
