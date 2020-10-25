'use strict';

const {Employee} = require('../models')
const employees = require('../data/employees.json')

employees.forEach(employee => {
  employee.createdAt = new Date()
  employee.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {

    // return queryInterface.bulkInsert("Employees", employee, {})

    return Employee.bulkCreate(employees)

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("Employees", null, {})
  }
};
