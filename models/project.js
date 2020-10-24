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
      Project.belongsToMany(models.Employee, {through: models.EmployeeProject})
      Project.hasMany(models.Comment)
    }
  };
  Project.init({
    key: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.STRING,
    },
    target_resolution_time: {
      type: DataTypes.DATE,
    },
    actual_resolution_time: {
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};