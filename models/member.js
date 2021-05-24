'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Member.hasMany(models.Comment, {foreignKey: 'memberId'}),
      Member.hasMany(models.Pattern, {foreignKey: 'memberId'})

    }
  };
  Member.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    profileImg: DataTypes.STRING,
    aboutMe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};