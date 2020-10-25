const routes = require('express').Router()
const passport = require('passport')

const Controller = require('../controllers/Controller')
const ProjectController = require('../controllers/ProjectController')

const isAuthenticated = require('../middlewares')

const employeeRoutes = require('./employees')
const projectRoutes = require('./projects')


routes.get('/', ProjectController.show)
routes.get('/logout', Controller.logout)
routes.get('/login', Controller.login)
routes.post('/login', passport.authenticate('local', {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true
}))
routes.get('/signup', Controller.signup)
routes.post('/signup', Controller.postSignup)

routes.use('/employees', isAuthenticated, employeeRoutes)
routes.use('/projects', projectRoutes)


module.exports = routes
