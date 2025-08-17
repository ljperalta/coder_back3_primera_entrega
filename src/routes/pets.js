const express = require('express');
const router = express.Router();
const uploader = require('../utils/uploader.js');
const petsController = require('../controllers/pets.controller.js');
const { generatePets } = require('../utils/mocking.js');

// router.get('/', async (req, res, next) => {
//     try {
//         console.log('Fetching all pets');
//         const pets = await petsController.getAllPets();
//         res.json({ status: 'success', payload: pets });
//     } catch (error) {
//         next(error);
//     }
// });

router.get('/', petsController.getAllPets);

router.get('/mocking', (req, res, next) => {
    try {
        const pets = generatePets(20);
        res.json({ status: 'success', payload: pets });
    } catch (error) {
        next(error);
    }
});

router.post('/', petsController.createPet);
router.post('/withimage', uploader.single('image'), petsController.createPetWithImage);
router.put('/:pid', petsController.updatePet);
router.delete('/:pid', petsController.deletePet);

module.exports = router;