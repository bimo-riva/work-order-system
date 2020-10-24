'use strict';

const {Employee} = require('../models')
const employees = require('../data/employees.json')

employees.forEach(employee => {
  employee.createdAt = new Date()
  employee.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * return queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // return queryInterface.bulkInsert("Employees", employee, {})

    return Employee.bulkCreate(employee)

  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * return queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Employees", null, {})
  }
};
