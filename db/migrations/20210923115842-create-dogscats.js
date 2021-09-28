module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dogscats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dog_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Dogs', // tableName
          key: 'id',
        },
      },
      cat_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cats', // tableName
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Dogscats');
  },
};
