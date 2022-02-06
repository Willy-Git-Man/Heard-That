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
        { userId: 1, albumId: 1, songName: 'Party in the USA',artistName: 'Miley Cyrus', songUrl: "www.howdoIfindsongurl.com", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://imageio.forbes.com/specials-images/imageserve/61d068989802259093ce8cd2/Tom-Ford-AW20-Show---Arrivals/960x0.jpg?fit=bounds&format=jpg&width=960"},
        { userId: 1, albumId: 2, songName: 'Free Fallin',artistName: 'Tom Petty', songUrl: "www.howdoIfindsongurl2.com", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://imageio.forbes.com/specials-images/imageserve/61d068989802259093ce8cd2/Tom-Ford-AW20-Show---Arrivals/960x0.jpg?fit=bounds&format=jpg&width=960"},
        { userId: 1, albumId: 1, songName: 'Feelin good again',artistName: 'Rober earl keen', songUrl: "www.howdoIfindsongurl3.com", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://imageio.forbes.com/specials-images/imageserve/61d068989802259093ce8cd2/Tom-Ford-AW20-Show---Arrivals/960x0.jpg?fit=bounds&format=jpg&width=960"},




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
