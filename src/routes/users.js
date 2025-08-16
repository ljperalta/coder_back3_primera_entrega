const express = require('express');
const router = express.Router();
const { generateUsers } = require('../utils/mocking.js');

router.get('/', (req, res, next) => {
    try {
        const users = generateUsers(50);
        res.json({ status: 'success', payload: users });
    } catch (error) {
        next(error);
    }
});

router.post("/generateData", async (req, res) => {
    try {
      console.log("Generating mock data...");
        const { users = 0, pets = 0 } = req.body;

        let createdUsers = [];
        let createdPets = [];

        if (users > 0) {
            const mockUsers = generateUsers(users);
            for (let user of mockUsers) {
                await usersService.create(user);
            }
        }

        if (pets > 0) {
            const mockPets = generatePets(pets);
            for (let pet of mockPets) {
                await petsService.create(pet);
            }
        }

        res.json({
            status: 'success',
            message: 'Datos generados e insertados correctamente',
            usersInserted: createdUsers.length,
            petsInserted: createdPets.length
        });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
});

module.exports = router;