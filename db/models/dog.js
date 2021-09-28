const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cat }) {
      // define association here
      this.belongsToMany(Cat, { through: 'Dogscats', foreignKey: 'dog_id' });
    }
  }
  Dog.init(
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      age: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Dog',
    }
  );
  return Dog;
};
