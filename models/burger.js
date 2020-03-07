module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burger", {
      burger_name: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN
    });
    return burger;
  };