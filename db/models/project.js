'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
        Project.belongsToMany(models.Worker, {
            through: 'workers-projects',
            foreignKey: 'id_project',
            as: {singular: 'Worker' , plural: 'Workers'}
        });
    }
  }
  Project.init(
    {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
      },
      description: {
          type: DataTypes.STRING,
          allowNull: false
      }
    },
    {
      sequelize,
      name: {singular: 'Project', plural: 'Projects'},
      tableName: 'projects',
      timestamps: false
    }
  );
  return Project;
};
