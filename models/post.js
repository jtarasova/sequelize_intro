'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'author',
      }); // описываем связь с моедлью юзеров через внешний ключ
    }
  }
  Post.init(
    {
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      author: { // НЕ ЗАБУДЬ ДОБАВИТЬ ЭТО В МИГРАЦИЮ!!!
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Post',
    }
  );
  return Post;
};
