const Pet = require("../dao/Pets.dao.js")

const PetRepository = require("../repository/PetRepository.js");

const petsService = new PetRepository(new Pet());

module.exports = petsService;
