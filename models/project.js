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
    summary: DataTypes.STRING,
    status: DataTypes.STRING,
    summary: DataTypes.STRING,
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
    if(instance.priority === 'Low'){
      instance.finished_time = Date.now() + (24 * 60 * 60 * 1000)
    }
    else if(instance.priority === "Medium"){
      instance.finished_time = Date.now() + (16 * 60 * 60 * 1000)
    }
    else if(instance.priority === "High"){
      instance.finished_time = Date.now() + (8 * 60 * 60 * 1000)
    }

    instance.status = 'New'
  })
  return Project;
};
