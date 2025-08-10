const Pet = require("../dao/Pets.dao.js")

const PetRepository = require("../repository/PetRepository.js");

const petsService = new PetRepository(new Pet());

module.exports = petsService;
// const petsService = {
//     getAll: async () => {
//         return await Pet.find();
//     },
//     create: async (petData) => {
//         const pet = new Pet(petData);
//         return await pet.save();
//     },
//     update: async (petId, petData) => {
//         return await Pet.findByIdAndUpdate(petId, petData, { new: true });
//     },
//     delete: async (petId) => {
//         return await Pet.findByIdAndDelete(petId);
//     }
// }

// module.exports = petsService;
