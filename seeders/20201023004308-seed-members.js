'use strict';

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
    const members = [
      {
        isLeader: true,
        EmployeeId: 2,
        ProjectId: 1
      },
      {
        isLeader: false,
        EmployeeId: 4,
        ProjectId: 1
      },
      {
        isLeader: false,
        EmployeeId: 1,
        ProjectId: 1
      },
      {
        isLeader: true,
        EmployeeId: 6,
        ProjectId: 2
      },
      {
        isLeader: false,
        EmployeeId: 1,
        ProjectId: 2
      },
      {
        isLeader: true,
        EmployeeId: 4,
        ProjectId: 3
      },
      {
        isLeader: false,
        EmployeeId: 3,
        ProjectId: 2
      },
      {
        isLeader: false,
        EmployeeId: 1,
        ProjectId: 3
      },
    ]

    members.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    return queryInterface.bulkInsert("ProjectEmployees", members, {})

  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete("ProjectEmployees", members)

  }
};
