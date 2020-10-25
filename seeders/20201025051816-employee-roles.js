'use strict';

const employeeRoles = require('../data/employeeRoles.json')

employeeRoles.forEach(employeeRole => {
  employeeRole.createdAt = new Date()
  employeeRole.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert("EmployeeRoles", employeeRoles, {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("EmployeeRoles", null, {})
  }
};
