'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    title: DataTypes.STRING,
    item: DataTypes.STRING
  }, {});
  List.associate = function(models) {
    // associations can be defined here
  };
  return List;
};