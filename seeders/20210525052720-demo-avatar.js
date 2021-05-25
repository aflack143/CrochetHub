'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Avatars', [
      {
        imgName: 'default',
        imgUrl: '/images/avatars/default.png'
      },
      {
        imgName: 'img1',
        imgUrl: '/images/avatars/img1.png'
      },
      {
        imgName: 'img2',
        imgUrl: '/images/avatars/img2.png'
      },
      {
        imgName: 'img3',
        imgUrl: '/images/avatars/img3.png'
      },
      {
        imgName: 'img4',
        imgUrl: '/images/avatars/img4.png'
      },
      {
        imgName: 'img5',
        imgUrl: '/images/avatars/img5.png'
      },
      {
        imgName: 'img6',
        imgUrl: '/images/avatars/img6.png'
      },{
        imgName: 'img7',
        imgUrl: '/images/avatars/img7.png'
      },
      {
        imgName: 'img8',
        imgUrl: '/images/avatars/img8.png'
      },
      {
        imgName: 'img9',
        imgUrl: '/images/avatars/img9.png'
      },
      {
        imgName: 'img10',
        imgUrl: '/images/avatars/img10.png'
      },
      {
        imgName: 'img11',
        imgUrl: '/images/avatars/img11.png'
      },
      {
        imgName: 'img12',
        imgUrl: '/images/avatars/img12.png'
      }
    ], {});
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
