'use strict';

const comments = require('../data/comments.json')

comments.forEach(comment => {
  comment.createdAt = new Date()
  comment.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert("Comments", comments, {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("Comments", null, {})
  }
};
