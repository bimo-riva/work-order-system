'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EmployeeProject.belongsTo(models.Employee)
      EmployeeProject.belongsTo(models.Project)
    }
  };
  EmployeeProject.init({
    isLeader: DataTypes.BOOLEAN,
    EmployeeId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EmployeeProject',
  });
  return EmployeeProject;
};