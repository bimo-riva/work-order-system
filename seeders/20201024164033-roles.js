'use strict';

const roles = require('../data/roles.json')

roles.forEach(role => {
  role.createdAt = new Date()
  role.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert("Roles", roles, {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("Roles", null, {})
  }
};
