const express = require('express')
const employeeRoutes = express.Router()

const EmployeeController = require('../controllers/EmployeeController')

employeeRoutes.get('/', EmployeeController.show)


module.exports = employeeRoutes


// | GET    | /employees           | Menampilkan seluruh employee yang ada di database            |