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
    }
  };
  Project.init({
    key: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    location: DataTypes.STRING,
    priority: DataTypes.STRING,
    target_resolution_time: DataTypes.DATE,
    actual_resolution_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};