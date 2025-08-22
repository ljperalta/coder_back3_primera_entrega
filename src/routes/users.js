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

router.post("/generateData/users/:cantU/pets/:cantP", async (req, res) => {
    try {
        const { cantU, cantP } = req.params;

        let createdUsers = 0;
        let createdPets = 0;

        if (cantU > 0) {
            const mockUsers = generateUsers(cantU);
            for (let user of mockUsers) {
                createdUsers++
                await usersService.create(user);
            }
        }

        if (cantP > 0) {
            const mockPets = generatePets(cantP);
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