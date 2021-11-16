'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Worker extends Model {
    static associate(models) {
        Worker.belongsToMany(models.Project, {
            through: 'workers-projects',
            foreignKey: 'id_worker',
            as: 'Project'
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
      modelName: 'Worker',
      tableName: 'workers',
      timestamps: false
    }
  );
  return Worker;
};
