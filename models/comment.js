'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Member, {foreignKey: 'memberId'}),
      Comment.belongsTo(models.Pattern, {foreignKey: 'patternId'})

    }
  };
  Comment.init({
    memberId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    patternId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};