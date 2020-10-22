const router = require('express').Router()
const Controller = require('../controllers/Controller')

const employeeRouter = require('./employees')
const projectRouter = require('./projects')

router.use('employees', employeeRouter)
router.use('projects', projectRouter)

router.get('/', Controller.projects)

module.exports = router