'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [
      {
        memberId: 2,
        content: "Great job!",
        patternId: 1
      },
      {
        memberId: 1,
        content: "Testing, comments..1..2..3, Test Test!",
        patternId: 2
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
