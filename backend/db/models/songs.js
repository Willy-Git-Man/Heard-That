'use strict';
module.exports = (sequelize, DataTypes) => {
  const Songs = sequelize.define('Songs', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    songName: DataTypes.STRING,
    artistName: DataTypes.STRING,
    songUrl: DataTypes.STRING
  }, {});
  Songs.associate = function(models) {
    // associations can be defined here
  };
  return Songs;
};