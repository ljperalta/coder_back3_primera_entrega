const { faker } = require('@faker-js/faker');

const generateMockPet = () => ({
  name: faker.animal.petName(),
  specie: faker.animal.type(),
  birthDate: faker.date.past(5).toISOString().split('T')[0],
  adopted: faker.datatype.boolean(),
});

const generatePets = (count) => {
  return Array.from({ length: count }, () => generateMockPet());
};

module.exports = {
  generatePets,
};