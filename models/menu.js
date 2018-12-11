
module.exports = function (sequelize, DataTypes) {
  var Menu = sequelize.define("Menu", {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    timestamps: false,
    freezeTableName: false
  });

  // Menu.associate = function (models) {
  //   Menu.hasMany(models.Category, {
  //     onDelete: "cascade"
  //   });
  // };
  return Menu;
};