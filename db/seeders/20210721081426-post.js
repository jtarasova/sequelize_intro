'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example: **/

    await queryInterface.bulkInsert(
      'Posts',
      [
        {
          body: 'WHYYYYY',
          author: 1,
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          body: 'WHEEEEEERREEEE',
          author: 3,
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

    await queryInterface.bulkDelete('Posts', null, {});
  },
};
