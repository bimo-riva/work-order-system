'use strict';
const {
  Model
} = require('sequelize');

const {convertTime} = require('../helpers/index')

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.belongsToMany(models.Employee, {through : models.ProjectEmployee})
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

  //Hooks
  Project.beforeCreate((instance, params)=>{
    if(instance.status === 'Low'){
      instance.finished_time = new Date() + (24 * 60 * 60 * 1000)
    }
    else if(instance.status === "Medium"){
      instance.finished_time = new Date() + (16 * 60 * 60 * 1000)
    }
    else if(instance.status === "High"){
      instance.finished_time = new Date() + (8 * 60 * 60 * 1000)
    }
  })
  Project.afterFind((instances, params)=>{
    instances.forEach(instance =>{
      instance.finished_time = convertTime(instance.finished_time)
    })
    
  })
  return Project;
};