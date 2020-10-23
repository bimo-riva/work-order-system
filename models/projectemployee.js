'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectEmployee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProjectEmployee.belongsTo(models.Project)
      ProjectEmployee.belongsTo(models.Employee)
    }
  };
  ProjectEmployee.init({
    ProjectId: DataTypes.INTEGER,
    EmployeeId: DataTypes.INTEGER,
    isLeader: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ProjectEmployee',
  });
  return ProjectEmployee;
};