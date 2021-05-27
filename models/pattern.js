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
      Pattern.hasMany(models.Comment, {foreignKey: 'patternId'}),
      Pattern.belongsTo(models.Design, {foreignKey: 'introImg'})
    }
  };
  Pattern.init({
    title: DataTypes.STRING,
    patternType: DataTypes.STRING,
    introImg: DataTypes.INTEGER,
    introContent: DataTypes.STRING,
    itemsNeeded: DataTypes.STRING,
    contentHowTo: DataTypes.STRING,
    patternImg: DataTypes.STRING,
    endingContent: DataTypes.STRING,
    memberId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pattern',
  });
  return Pattern;
};