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
        {userId: 2, title: 'Donda', imageUrl:"https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg", createdAt: new Date(), updatedAt: new Date(),},
        {userId: 2, title: 'Vibrations', imageUrl:"https://png.pngtree.com/element_our/png/20181102/colorful-smoke-effect-frame-border-png_227982.jpg", createdAt: new Date(), updatedAt: new Date(),},
        {userId: 2, title: 'Favorites', imageUrl:"https://png.pngtree.com/png-clipart/20190115/ourmid/pngtree-red-heart-png-image_319448.png", createdAt: new Date(), updatedAt: new Date(),},
        {userId: 2, title: 'Feels', imageUrl:"https://png.pngtree.com/element_our/sm/20171118/sm_5a0fed8f8edb5.jpg", createdAt: new Date(), updatedAt: new Date(),},
        {userId: 2, title: 'Gold', imageUrl:"https://png.pngtree.com/element_our/png/20181109/gold-glitter-texture-on-black-background-png_234948.jpg", createdAt: new Date(), updatedAt: new Date(),},
        {userId: 2, title: '2022', imageUrl:"https://png.pngtree.com/png-clipart/20210818/ourmid/pngtree-2022-new-year-golden-texture-hollowed-out-gradient-art-word-png-image_3812032.jpg", createdAt: new Date(), updatedAt: new Date(),},


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
