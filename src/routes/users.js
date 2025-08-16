const express = require('express');
const router = express.Router();
const { generatePets, generateUsers } = require('../utils/mocking.js');

router.get('/mocking', (req, res, next) => {
    try {
        const pets = generateUsers(20);
        res.json({ status: 'success', payload: pets });
    } catch (error) {
        next(error);
    }
});

module.exports = router;