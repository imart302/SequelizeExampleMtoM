'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('workers', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      }
    });

    await queryInterface.createTable('projects', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      }
    });

    await queryInterface.createTable('workers-projects', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_worker: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references : {
          model: {
            tableName: 'workers'
          },
          key: 'id'
        }
      },
      id_project: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references : {
          model: {
            tableName: 'projects'
          },
          key: 'id'
        }
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('workers-projects');
    await queryInterface.dropTable('projects')
    await queryInterface.dropTable('workers');
  }
};
