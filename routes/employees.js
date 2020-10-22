const router = require('express').Router()
const Controller = require('../controllers/Controller')



router.get('/', Controller.employees)
router.get('/add', Controller.getEmployeeAdd)
router.post('/add', Controller.postEmployeeAdd)
router.get('/edit', Controller.getEmployeeEdit)
router.post('/edit', Controller.postEmployeeEdit)

module.exports = router