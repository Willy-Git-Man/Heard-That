'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Albums', [
        {userId: 2, title: 'Misfit Songs', imageUrl:"https://cdn.shopify.com/s/files/1/0265/2585/9919/collections/COVER_MISFIT_TOYS_TPB_111019_print_1024x1024.jpg?v=1588732518", createdAt: new Date(), updatedAt: new Date(),},
        {userId: 2, title: 'My Playlist', imageUrl:"https://tonyaduncanellis.com/wp-content/uploads/2020/08/mixtape.jpg", createdAt: new Date(), updatedAt: new Date(),},
        {userId: 2, title: 'Liked Songs', imageUrl:"https://cutewallpaper.org/24/heart-image-png/hd-white-heart-shape-silhouette-png-citypng.png", createdAt: new Date(), updatedAt: new Date(),},

        // {userId: 1, title: 'Summer Vibes', imageUrl:"https://i1.sndcdn.com/artworks-kpswMSYYQ4osELsK-jbOC2w-t500x500.jpg", createdAt: new Date(), updatedAt: new Date(),},
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
