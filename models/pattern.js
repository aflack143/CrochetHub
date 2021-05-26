'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pattern extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pattern.belongsTo(models.Member, {foreignKey: 'memberId'}),
      Pattern.hasMany(models.Comment, {foreignKey: 'commentId'}),
      Pattern.belongsTo(models.Design, {foreignKey: 'patternImg'})
    }
  };
  Pattern.init({
    title: DataTypes.STRING,
    patternType: DataTypes.STRING,
    introImg: DataTypes.STRING,
    introContent: DataTypes.STRING,
    itemsNeeded: DataTypes.STRING,
    contentHowTo: DataTypes.STRING,
    patternImg: DataTypes.INTEGER,
    endingContent: DataTypes.STRING,
    memberId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pattern',
  });
  return Pattern;
};