const axios = require('axios');
const membersRepo = require('../repositories/membersRepo');

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const fetchAndStoreMembers = async () => {
    try {
        console.log("Fetching users from jsonplaceholder API...");
        const {data: users} = await axios.get(USERS_URL);

        for (const user of users) {
            const existingMember = await membersRepo.getByAPIId(user.id);
            if (!existingMember) {
                await membersRepo.addMember({ apiId: user.id, name: user.name, email: user.email, city: user.address.city });
            }
        }

        console.log("Members data initialization complete.");
    } catch (error) {
        console.error("Error fetching or storing members:", error);
    }
};

module.exports = { fetchAndStoreMembers };