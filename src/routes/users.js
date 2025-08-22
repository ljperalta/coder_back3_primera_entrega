const express = require('express');
const router = express.Router();
const { petsService, usersService} = require("../services/index.js");
const { generatePets, generateUsers } = require('../utils/mocking.js');

router.get('/', async (req, res, next) => {
    try {
        const users = await usersService.getAll();
        res.json({ status: 'success', payload: users });
    } catch (error) {
        next(error);
    }
});

router.get('/generateData/:cant', (req, res, next) => {
    try {
        const { cant } = req.params;
        const pets = generatePets(cant);
        res.json({ status: 'success', payload: pets });
    } catch (error) {
        next(error);
    }
});

router.post("/generateData", async (req, res) => {
    try {
        const { users = 0, pets = 0 } = req.body;

        let createdUsers = 0;
        let createdPets = 0;

        if (users > 0) {
            const mockUsers = generateUsers(users);
            for (let user of mockUsers) {
                createdUsers++
                await usersService.create(user);
            }
        }

        if (pets > 0) {
            const mockPets = generatePets(pets);
            for (let pet of mockPets) {
                createdPets++
                await petsService.create(pet);
            }
        }

        res.json({
            status: 'success',
            message: 'Datos generados e insertados correctamente',
            usersInserted: createdUsers,
            petsInserted: createdPets
        });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
});

module.exports = router;