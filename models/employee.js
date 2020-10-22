'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsToMany(models.Project, {through : models.ProjectEmployee})
    }
    
  };
  Employee.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    position: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
  });

  Employee.beforeCreate((user,params) => {
    const hash = bcrypt.hashSync(user.password, 12);

    console.log(hash)

    user.password = hash

  })

  Employee.beforeBulkCreate((users,params) => {

    users.map(user => {
      const hash = bcrypt.hashSync(user.password, 12);
  
      user.password = hash
    })

  })
  return Employee;
};