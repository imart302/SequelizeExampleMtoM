'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Worker extends Model {
    static associate(models) {
        Worker.belongsToMany(models.Project, {
            through: 'workers-projects',
            foreignKey: 'id_worker',
            as: {singular: 'Project', plural: 'Projects'}
        });
    }
  }
  Worker.init(
    {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      }
    },
    {
      sequelize,
      name: {singular: 'Worker', plural: 'Workers'},
      tableName: 'workers',
      timestamps: false
    }
  );
  return Worker;
};
