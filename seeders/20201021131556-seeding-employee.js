'use strict';

const employee = [
  {
    name : "Bimo Dwien Prabowo",
    position : "Engineer",
    email : "bimo.dwien@hacktiv.com",
    password : "bimobimo123",
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    name : "Reynaldi Riva",
    position : "Manager",
    email : "reynaldi.riva@hacktiv.com",
    password : "reynaldi123",
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    name : "Tamy Hu",
    position : "Helpdesk",
    email : "tami.hu@hacktiv.com",
    password : "password123",
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    name : "Musa Bagja",
    position : "Engineer",
    email : "musa.bagja@hacktiv.com",
    password : "musamus123",
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    name : "Adrian Kuncoro",
    position : "Engineer",
    email : "adrian.kun@hecktif.com",
    password : "bimobimo123",
    createdAt : new Date(),
    updatedAt : new Date()
  },
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
    return queryInterface.bulkInsert("Employees", employee, {})

  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Employees", null, {})
  }
};
