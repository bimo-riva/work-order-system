'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RolePermission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RolePermission.belongsTo(models.Role)
      RolePermission.belongsTo(models.Permission)
    }
  };
  RolePermission.init({
    RoleName: {
      type: DataTypes.STRING,
      references: {
        model: 'Role',
        key: 'name'
      }
    },
    PermissionName: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Permission',
        key: 'name'
      }
    }
  }, {
    sequelize,
    modelName: 'RolePermission',
  });

  RolePermission.removeAttribute('id')
  
  return RolePermission;
};