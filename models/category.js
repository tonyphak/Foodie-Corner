
module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    name: DataTypes.STRING,
    // description: DataTypes.STRING,
  }, {
    timestamps: false,
    freezeTableName: false
  });

  Category.associate = function(models){
    Category.hasMany(models.Recipe, {
      onDelete: "cascade"
    });
  };

  return Category;
};