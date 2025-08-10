const express = require('express');
const router = express.Router();
const uploader = require('../utils/uploader.js');

router.get('/', petsController.getAllPets);
router.post('/', petsController.createPet);
router.post('/withimage', uploader.single('image'), petsController.createPetWithImage);
router.put('/:pid', petsController.updatePet);
router.delete('/:pid', petsController.deletePet);

module.exports = router;