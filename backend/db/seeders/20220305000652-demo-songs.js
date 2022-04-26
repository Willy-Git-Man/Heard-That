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

        { userId: 1, albumId: 3, songName: 'God Breathed',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Ft-Vory-God-Breathed-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Donda Chant',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Ft-Syleena-Johnson-Donda-Chant-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Hurricane',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Ft-The-Weeknd-And-Lil-Baby-Hurricane-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Junya',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Ft-Playboi-Carti-Junya-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Jonah',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Jonah-Ft-Lil-Durk-And-Vory-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Ok Ok',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Ok-Ok-Ft-Lil-Yachty-And-Rooga-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Jesus Lord',artistName: 'Kanye West', songUrl: "hhttps://cdn.trendybeatz.com/audio/Kanye-West-Off-The-Grid-Ft-Fivio-Foreign-And-Playboi-Carti-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Off The Grid',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Ft-Vory-God-Breathed-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'No Child Left Behind',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-No-Child-Left-Behind-Ft-Sunday-Service-Choir-And-Vory-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Remote Control',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Remote-Control-Ft-Young-Thug-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'No Child Left Behind',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-No-Child-Left-Behind-Ft-Sunday-Service-Choir-And-Vory-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Praise God',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Praise-God-Ft-Donda-West-Baby-Keem-And-Travis-Scott-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Keep My Spirit Alive',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Keep-My-Spirit-Alive-Ft-Conway-The-Machine-KayCyy-And-Westside-Gunn-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Heaven And Hell',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Heaven-And-Hell-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: '24',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-14-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Lord I Need You',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Ft-Sunday-Service-Choir-Lord-I-Need-You-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Tell The Vision',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Ft-Pop-Smoke-Tell-The-Vision-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Jail',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Ft-Jay-Z-Jail-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Moon',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Ft-Don-Toliver-Moon-And-Kid-Cudi-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Come To Life',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Come-To-Life-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Believe What I Say',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Believe-What-I-Say-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'Pure Souls',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Ft-Roddy-Ricch-Shenseea-Pure-Souls-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Album-Art.jpg"},
        { userId: 1, albumId: 3, songName: 'New Again',artistName: 'Kanye West', songUrl: "https://cdn.trendybeatz.com/audio/Kanye-West-Ft-Chris-Brown-New-Again-(TrendyBeatz.com).mp3", createdAt: new Date(), updatedAt: new Date(), imageUrl: "https://trendybeatz.com/images/Kanye-West-Donda-Cover-Album-Art.jpg"},









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
