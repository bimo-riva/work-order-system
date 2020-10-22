const routes = require('express').Router()
const Controller = require('../controllers/Controller')
const ProjectController = require('../controllers/ProjectController')

const employeeRoutes = require('./employees')
const projectRoutes = require('./projects')
const teamRoutes = require('./teams')

routes.get('/', ProjectController.show)
routes.get('/login', Controller.login)
routes.post('/login', Controller.postLogin)

routes.use('/employees', employeeRoutes)
routes.use('/projects', projectRoutes)
routes.use('/teams', teamRoutes)

module.exports = routes
