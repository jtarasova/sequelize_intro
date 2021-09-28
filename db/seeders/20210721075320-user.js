'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          email: 'bla@bla.bla',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jane Doe',
          email: 'bla2@bla.bla',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'George Bla',
          email: 'george@bla.bla',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};
