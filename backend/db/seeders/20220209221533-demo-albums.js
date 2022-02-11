'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Albums', [
        {userId: 1, title: 'The Wall', imageUrl:"https://target.scene7.com/is/image/Target/GUEST_07c8eaaa-9476-472d-848c-4905b2eefab8?wid=488&hei=488&fmt=pjpeg", createdAt: new Date(), updatedAt: new Date(),},
        {userId: 1, title: 'My Songs', imageUrl:"https://images.macrumors.com/t/vMbr05RQ60tz7V_zS5UEO9SbGR0=/1600x900/smart/article-new/2018/05/apple-music-note.jpg", createdAt: new Date(), updatedAt: new Date(),},
        {userId: 1, title: 'Summer Vibes', imageUrl:"https://i1.sndcdn.com/artworks-kpswMSYYQ4osELsK-jbOC2w-t500x500.jpg", createdAt: new Date(), updatedAt: new Date(),},
        //{userId: 1, title: 'Post Test', imageUrl:"https://i1.sndcdn.com/artworks-kpswMSYYQ4osELsK-jbOC2w-t500x500.jpg", createdAt: new Date(), updatedAt: new Date(),},
        //{userId: 1, title: 'Update Test', imageUrl:"https://i1.sndcdn.com/artworks-kpswMSYYQ4osELsK-jbOC2w-t500x500.jpg", createdAt: new Date(), updatedAt: new Date(),},


      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Albums', null, {});
  }
};
