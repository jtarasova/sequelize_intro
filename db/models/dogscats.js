const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dogscats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dogscats.init(
    {
      dog_id: DataTypes.INTEGER,
      cat_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Dogscats',
    }
  );
  return Dogscats;
};
