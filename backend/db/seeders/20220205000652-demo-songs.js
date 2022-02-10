'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Songs', [
        { userId: 1, albumId: 1, songName: 'Novacaine',artistName: 'The Unlikely Candidates', songUrl: "https://www.mboxdrive.com/The_Unlikely_Candidates_-_Novocaine_(musmore.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://e.snmc.io/i/600/s/0a3e1f3366add9a1652c15cc5766c41d/4917674/various-artists-novocaine-Cover-Art.jpg"},
        { userId: 1, albumId: 2, songName: "I'm Slim Shady",artistName: 'Eminem', songUrl: "https://www.mboxdrive.com/Eminem_-_The_Real_Slim_Shady_47829433.mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://s3.amazonaws.com/images.imvdb.com/video/227188296903-eminem-the-real-slim-shady_music_video_ov.jpg"},
        { userId: 1, albumId: 1, songName: 'Space Disco',artistName: 'T. Schürger', songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61+xEdXTb-L.jpg"},




      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example: test
      */
      return queryInterface.bulkDelete('Songs', null, {});
  }
};


 /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
