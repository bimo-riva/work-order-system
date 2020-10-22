const routes = require('express').Router()
const Controller = require('../controllers/Controller')

const employeeRoutes = require('./employees')
const projectRoutes = require('./projects')

routes.get('/', Controller.home)
routes.get('/login', Controller.login)
routes.post('/login', Controller.postLogin)

routes.use('/employees', employeeRoutes)
routes.use('/projects', projectRoutes)

module.exports = routes
