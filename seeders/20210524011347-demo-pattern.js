'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Patterns', [
      {
        title: 'Admin Project',
        patternType: 'crochet',
        introImg: 'https://c1.wallpaperflare.com/preview/717/821/266/yarn-variegated-crochet-bulky.jpg',
        introContent: 'Admin setting up initial project',
        itemsNeeded: 'Hook: size G',
        contentHowTo: 'To begin-chain 25',
        patternImg: 8,
	      endingContent: 'thank you',
        memberId: 1,
        commentId: null
    }, 
    {
        title: 'Test Project',
        patternType: 'crochet',
        introImg: 'https://p0.pikist.com/photos/275/7/wool-hook-craft-yarn-thread-hobby-crochet-hook-cotton-fashion.jpg',
        introContent: 'Tester creating 1st project',
        itemsNeeded: 'Hook: size G',
        contentHowTo: 'Row 1-create circle with 5 sc',
        patternImg: 10,
	      endingContent: 'thank you',
        memberId: 1,
        commentId: null
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
