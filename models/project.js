'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.hasMany(models.ProjectEmployee)
    }
  };
  Project.init({
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    location: DataTypes.STRING,
    priority: DataTypes.STRING,
    finished_time: DataTypes.DATE,
    actual_finished_time: DataTypes.DATE,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};