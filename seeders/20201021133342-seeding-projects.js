'use strict';

const project =[
  {
    description : "Lorem ipsum dolor sit amet",
    status : "On Progress",
    location : "-6.185583, 106.822843",
    priority: "Medium",
    finished_time : "2020-10-21 17:35:35",
    actual_finished_time : null,
    comment : "Butuh tambahan Engineer",
    createdAt : new Date(),
    updatedAt : new Date()
    
  },
  {
    description : "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    status : "New",
    location : "-6.260732, 106.781699",
    priority: "High",
    finished_time : "2020-10-22 17:35:36",
    actual_finished_time : null,
    comment : "Tolong kirimkan Engineer",
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    description : "Ut enim ad minim veniam, quis nostrud exercitation",
    status : "Close",
    location : "-6.185583, 106.822843",
    priority: "Medium",
    finished_time : "2020-10-22 18:35:36",
    actual_finished_time : "2020-10-22 17:10:05",
    comment : "Tolong di close",
    createdAt : new Date(),
    updatedAt : new Date()
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert("Projects", project, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Projects", null, {})
  }
};
