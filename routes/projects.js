const express = require('express')
const projectRoutes = express.Router()

const ProjectController = require('../controllers/EmployeeController')

projectRoutes.get('/', ProjectController.show)

module.exports = projectRoutes