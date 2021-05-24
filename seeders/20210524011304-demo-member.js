'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Members', [
      {
        first_name: 'admin',
        last_name: 'user',
        email: 'au@au',
        username: 'admin',
        password: 'password',
        aboutMe: 'Setting up a functioning website!!'
      },
      {
        first_name: 'test',
        last_name: 'user',
        email: 'tu@tu',
        username: 'test',
        password: 'password',
        aboutMe: 'Testing the functioning of this website!'
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
