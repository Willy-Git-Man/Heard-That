'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Albums', [
        {userId: 1, title: 'Misfit Songs', imageUrl:"https://cdn.shopify.com/s/files/1/0265/2585/9919/collections/COVER_MISFIT_TOYS_TPB_111019_print_1024x1024.jpg?v=1588732518", createdAt: new Date(), updatedAt: new Date(),},
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
