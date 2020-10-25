'use strict';

const members = require('../data/employeeProjects.json')

members.forEach(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert("EmployeeProjects", members, {})

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("EmployeeProjects", members)

  }
};
