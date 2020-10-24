'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EmployeeRole.belongsTo(models.Employee)
      EmployeeRole.belongsTo(models.Role)
    }
  };
  EmployeeRole.init({
    EmployeeId: DataTypes.STRING,
    RoleId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EmployeeRole',
  });
  return EmployeeRole;
};