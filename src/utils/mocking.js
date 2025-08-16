const { faker } = require('@faker-js/faker');
const { hashPassword } = require('./pass.js');

const generateMockPet = () => ({
  name: faker.animal.petName(),
  specie: faker.animal.type(),
  birthDate: faker.date.past(5).toISOString().split('T')[0],
  adopted: faker.datatype.boolean(),
});

const generatePets = (count) => {
  return Array.from({ length: count }, () => generateMockPet());
};

const generateMockUser = () => ({
  password: hashPassword('coder123'),
  role: assignRandomRole(),
  pets: [],
});

const generateUsers = (count) => {
  return Array.from({ length: count }, () => generateMockUser());
};

function assignRandomRole() {
  const roles = ['user', 'admin'];
  const randomIndex = Math.floor(Math.random() * roles.length);
  return roles[randomIndex];
}

module.exports = {
  generatePets,
  generateUsers,
};