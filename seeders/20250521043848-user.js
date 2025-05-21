'use strict';

const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcryptjs")
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [
      {
        id: uuidv4(),
        name: faker.person.firstName(),
        email: 'testuser@gmail.com',
        password: bcrypt.hashSync("users", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
