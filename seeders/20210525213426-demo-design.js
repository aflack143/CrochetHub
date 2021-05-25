'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Designs', [
      {
        imgName: 'yarn1',
        imgUrl: '/images/designs/design/yarn1.png'
      },
      {
        imgName: 'yarn2',
        imgUrl: '/images/designs/design/yarn2.png'
      },
      {
        imgName: 'yarn3',
        imgUrl: '/images/designs/design/yarn3.png'
      },
      {
        imgName: 'yarn4',
        imgUrl: '/images/designs/design/yarn4.png'
      },
      {
        imgName: 'yarn5',
        imgUrl: '/images/designs/design/yarn5.png'
      },
      {
        imgName: 'yarn6',
        imgUrl: '/images/designs/design/yarn6.png'
      },{
        imgName: 'yarn7',
        imgUrl: '/images/designs/design/yarn7.png'
      },
      {
        imgName: 'yarn8',
        imgUrl: '/images/designs/design/yarn8.png'
      },
      {
        imgName: 'yarn9',
        imgUrl: '/images/designs/design/yarn9.png'
      },
      {
        imgName: 'yarn10',
        imgUrl: '/images/designs/design/yarn10.png'
      },
      {
        imgName: 'yarn11',
        imgUrl: '/images/designs/design/yarn11.png'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
