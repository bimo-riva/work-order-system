const express = require('express')
const employeeRoutes = express.Router()
const EmployeeController = require('../controllers/EmployeeController')

employeeRoutes.get('/', EmployeeController.show)

module.exports = employeeRoutes

