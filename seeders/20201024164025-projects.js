'use strict';

const projects = require('../data/projects.json')

projects.forEach(project => {
  project.createdAt = new Date()
  project.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert("Projects", projects, {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("Projects", null, {})
  }
};
