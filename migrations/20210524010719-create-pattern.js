'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Patterns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      patternType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      introImg: {
        type: Sequelize.STRING
      },
      introContent: {
        type: Sequelize.STRING,
        allowNull: false
      },
      itemsNeeded: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contentHowTo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      patternImg: {
        type: Sequelize.INTEGER
      },
      endingContent: {
        type: Sequelize.STRING
      },
      memberId: {
        type: Sequelize.INTEGER
      },
      commentId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()

      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Patterns');
  }
};