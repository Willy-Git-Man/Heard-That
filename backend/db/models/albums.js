'use strict';
module.exports = (sequelize, DataTypes) => {
  const Albums = sequelize.define('Albums', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  Albums.associate = function(models) {
    // Albums.hasMany(models.Songs, {
    //   foreignKey: 'albumId'
    // })
    // Albums.belongsTo(models.User, {
    //   foriegnKey: 'userId'
    // })
  };
  return Albums;
};
