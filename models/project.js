'use strict';
const {
  Model
} = require('sequelize');

const { getRelativeTimeFormat } = require('../helpers/index.js')

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

    get target_resolution_time() {
      return getRelativeTimeFormat(new Date(this.target_resolution_time))
    }

    get createdAt() {
      return this.createdAt.toISOString().split('T')[0]
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

  //Hooks
  Project.beforeCreate((instance, params)=>{
    if(instance.priority === 'Low'){
      instance.target_resolution_time = Date.now() + (24 * 60 * 60 * 1000)
    }
    else if(instance.priority === "Medium"){
      instance.target_resolution_time = Date.now() + (16 * 60 * 60 * 1000)
    }
    else if(instance.priority === "High"){
      instance.target_resolution_time = Date.now() + (8 * 60 * 60 * 1000)
    }

    instance.status = 'New'
  })

  return Project;
};