'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Designs', [
      {
        imgName: 'yarn1',
        imgUrl: '/images/designs/design/yarn1.jpg'
      },
      {
        imgName: 'yarn2',
        imgUrl: '/images/designs/design/yarn2.jpg'
      },
      {
        imgName: 'yarn3',
        imgUrl: '/images/designs/design/yarn3.jpg'
      },
      {
        imgName: 'yarn4',
        imgUrl: '/images/designs/design/yarn4.jpg'
      },
      {
        imgName: 'yarn5',
        imgUrl: '/images/designs/design/yarn5.jpg'
      },
      {
        imgName: 'yarn6',
        imgUrl: '/images/designs/design/yarn6.jpg'
      },{
        imgName: 'yarn7',
        imgUrl: '/images/designs/design/yarn7.jpg'
      },
      {
        imgName: 'yarn8',
        imgUrl: '/images/designs/design/yarn8.jpg'
      },
      {
        imgName: 'yarn9',
        imgUrl: '/images/designs/design/yarn9.jpg'
      },
      {
        imgName: 'yarn10',
        imgUrl: '/images/designs/design/yarn10.jpg'
      },
      {
        imgName: 'yarn11',
        imgUrl: '/images/designs/design/yarn11.jpg'
      },
      {
        imgName: 'yarn12',
        imgUrl: '/images/designs/design/yarn12.jpg'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
