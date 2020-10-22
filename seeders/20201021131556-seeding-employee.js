'use strict';

const employee = [
  {
    name : "Bimo Dwien Prabowo",
    gender : "Male",
    position : "Engineer",
    username: "bimo",
    email : "bimo.dwien@hacktiv.com",
    password : "bimobimo123",
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    name : "Mochamad Zulfikar",
    gender : "Male",
    position : "Manager",
    username: "zul",
    email : "zul@hacktiv.com",
    password : "reynaldi123",
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    name : "Reynaldi Riva",
    gender : "Male",
    position : "Engineer",
    username: "riva",
    email : "reynaldi.riva@hacktiv.com",
    password : "reynaldi123",
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    name : "Tamy Hu",
    gender : "Female",
    position : "Helpdesk",
    username: "tamy",
    email : "tami.hu@hacktiv.com",
    password : "password123",
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    name : "Musa Bagja",
    gender : "Male",
    position : "Engineer",
    username: "musa",
    email : "musa.bagja@hacktiv.com",
    password : "musamus123",
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    name : "Adrian Kuncoro",
    gender : "Male",
    position : "Engineer",
    username: "adrian",
    email : "adrian.kun@hacktif.com",
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
