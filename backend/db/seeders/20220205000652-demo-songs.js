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
        { userId: 1, albumId: 1, songName: 'Party in the USA',artistName: 'Miley Cyrus', songUrl: "www.howdoIfindsongurl.com", createdAt: new Date(), updatedAt: new Date()},
        { userId: 1, albumId: 2, songName: 'Free Fallin',artistName: 'Tom Petty', songUrl: "www.howdoIfindsongurl2.com", createdAt: new Date(), updatedAt: new Date()},
        { userId: 1, albumId: 1, songName: 'Feelin good again',artistName: 'Rober earl keen', songUrl: "www.howdoIfindsongurl3.com", createdAt: new Date(), updatedAt: new Date()},




      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
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
