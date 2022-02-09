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
    // Songs.belongsTo(models.User, {
    //   foriegnKey: 'userId'
    // })
  };
  return Songs;
};
