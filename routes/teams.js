const express = require('express')
const teamRoutes = express.Router()
const TeamController = require('../controllers/TeamController')

teamRoutes.get('/', TeamController.getTeams)
teamRoutes.post('/', TeamController.postTeams)

module.exports = teamRoutes