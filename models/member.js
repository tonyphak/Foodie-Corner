
module.exports = function (sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    email: {
      type:DataTypes.STRING,	
      allowNull:false,	
      unique: true,	
      validate: {	
        isEmail: {	
          msg: "Must be a valid email address",	
        }	
      }	
    },
    password: DataTypes.STRING
  },
  {
    timestamps: false,
    freezeTableName: false
  });
  Member.associate = function(models) {
    Member.hasMany(models.Recipe, {
      onDelete: "cascade"
    });
  };
  return Member;
};