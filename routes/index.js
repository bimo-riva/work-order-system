const routes = require('express').Router()
const Controller = require('../controllers/Controller')
const ProjectController = require('../controllers/ProjectController')

const employeeRoutes = require('./employees')
const projectRoutes = require('./projects')

routes.get('/', ProjectController.show)
routes.get('/login', Controller.login)
routes.post('/login', Controller.postLogin)

routes.use('/employees', employeeRoutes)
routes.use('/projects', projectRoutes)

module.exports = routes
