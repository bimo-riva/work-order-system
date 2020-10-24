'use strict';

const project =[
  {
    description : "Lorem ipsum dolor sit amet",
    summary : "Lorem ipsum",
    status : "On Progress",
    location : "-6.185583 106.822843",
    priority: "Medium",
    target_resolution_time : "2020-10-21 17:35:35",
    actual_resolution_time : null,
    comment : "Butuh tambahan Engineer",
    createdAt : new Date(),
    updatedAt : new Date()
    
  },
  {
    description : "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    summary : "sed do eiusmod tempor",
    status : "New",
    location : "-6.260732 106.781699",
    priority: "High",
    target_resolution_time : "2020-10-23 17:35:36",
    actual_resolution_time : null,
    comment : "Tolong kirimkan Engineer",
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    description : "Ut enim ad minim veniam, quis nostrud exercitation",
    summary : "Ut enim ad minim veniam",
    status : "Close",
    location : "-6.185583 106.822843",
    priority: "Medium",
    target_resolution_time : "2020-10-23 18:35:36",
    actual_resolution_time : "2020-10-23 17:10:05",
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
     * return queryInterface.bulkInsert('People', [{
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
     * return queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Projects", null, {})
  }
};
