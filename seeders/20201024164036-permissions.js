'use strict';

const permissions = require('../data/permissions.json')

permissions.forEach(permission => {
  permission.createdAt = new Date()
  permission.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert("Permissions", permissions, {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("Permissions", null, {})
  }
};
