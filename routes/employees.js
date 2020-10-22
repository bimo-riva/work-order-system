const express = require('express')
const employeeRoutes = express.Router()
const EmployeeController = require('../controllers/EmployeeController')

employeeRoutes.get('/', EmployeeController.show)
employeeRoutes.get('/add', Controller.getEmployeeAdd)
employeeRoutes.post('/add', Controller.postEmployeeAdd)
employeeRoutes.get('/edit', Controller.getEmployeeEdit)
employeeRoutes.post('/edit', Controller.postEmployeeEdit)

module.exports = employeeRoutes

