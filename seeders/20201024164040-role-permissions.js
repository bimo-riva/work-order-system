'use strict';

const rolePermissions = require('../data/rolePermissions.json')

rolePermissions.forEach(rolePermission => {
  rolePermission.createdAt = new Date()
  rolePermission.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert("RolePermissions", rolePermissions, {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("RolePermissions", null, {})
  }
};
