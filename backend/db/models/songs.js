'use strict';
module.exports = (sequelize, DataTypes) => {
  const Songs = sequelize.define('Songs', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    songName: DataTypes.STRING,
    artistName: DataTypes.STRING,
    songUrl: DataTypes.STRING,
    imageUrl: DataTypes.STRING

  }, {});
  Songs.associate = function(models) {
    Songs.belongsTo(models.User, {
      foriegnKey: 'userId'
    })
    Songs.belongsTo(models.Albums, {
      foriegnKey: 'albumId'
    })
  };
  return Songs;
};

//20220205000652-demo-songs
//20220204235452-create-songs
