'use strict';
module.exports = (sequelize, DataTypes) => {
  const Albums = sequelize.define('Albums', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  Albums.associate = function(models) {
    // associations can be defined here
  };
  return Albums;
};