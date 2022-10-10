'use strict';
const { hashPassword } = require('../helpers/bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'resarisyan',
          email: 'resarisyan@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
          password: hashPassword('123456'),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
