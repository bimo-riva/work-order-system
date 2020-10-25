'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role.belongsToMany(models.Employee, {through: models.EmployeeRole, sourceKey: 'name'})
      Role.belongsToMany(models.Permission, {through: models.RolePermission, sourceKey: 'name'})
    }
  };
  Role.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });

  Role.removeAttribute('id')

  return Role;
};