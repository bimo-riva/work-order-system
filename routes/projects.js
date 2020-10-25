const express = require('express')
const projectRoutes = express.Router()
const isAuthenticated = require('../middlewares/')

const ProjectController = require('../controllers/ProjectController')

projectRoutes.get('/', ProjectController.show)
projectRoutes.get('/add', isAuthenticated, ProjectController.getProjectAdd)
projectRoutes.post('/add', isAuthenticated, ProjectController.postProjectAdd)
projectRoutes.get('/edit/:id', isAuthenticated, ProjectController.getProjectEdit)
projectRoutes.post('/edit/:id', isAuthenticated, ProjectController.postProjectEdit)
projectRoutes.get('/mine', isAuthenticated, ProjectController.getProjectMine)
projectRoutes.get('/unassigned', ProjectController.getProjectUnassigned)
projectRoutes.get('/delete/:id', ProjectController.getProjectDelete)
projectRoutes.get('/teams/:id', isAuthenticated, ProjectController.getTeams)
projectRoutes.post('/teams/:id', isAuthenticated, ProjectController.postTeams)

module.exports = projectRoutes



// | GET    | /projects            | Menampilkan seluruh project yang ada di database             |
// | GET    | /projects/add        | Menampilkan form untuk menambahkan project                   |
// | POST   | /projects/add        | Menambahkan data project ke database                         |
// | GET    | /projects/open       | Menampilkan seluruh project di database dengan status open   |
// | GET    | /projects/mine       | Menampilkan seluruh project yang di assign ke employee tertentu |
// | GET    | /projects/unassigned | Mengupdate jumlah stock buku berdasarkan form restock buku   |
// | GET    | /projects/delete/:id | Menghapus buku dari database                                 |
