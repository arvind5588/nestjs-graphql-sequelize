'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'mobile', {
      type: Sequelize.STRING,
      allowNull: false, // Ensure allowNull is set to false
    });
    await queryInterface.addColumn('Users', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Users', 'status', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'mobile');
    await queryInterface.removeColumn('Users', 'password');
    await queryInterface.removeColumn('Users', 'status');
  }
};
