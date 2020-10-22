const router = require('express').Router()
const Controller = require('../controllers/Controller')



router.get('/', Controller.projects)
router.get('/add', Controller.getProjectAdd)
router.post('/add', Controller.postProjectAdd)
router.get('/open', Controller.getProjectsOpen)
router.get('/unassigned', Controller.getProjectsUnassigned)
router.get('/mine', Controller.getProjectsMine)

module.exports = router