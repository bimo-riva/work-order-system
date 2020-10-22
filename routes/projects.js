const express = require('express')
const projectRoutes = express.Router()

const ProjectController = require('../controllers/EmployeeController')

projectRoutes.get('/', ProjectController.show)



module.exports = projectRoutes



// | GET    | /projects            | Menampilkan seluruh project yang ada di database             |
// | GET    | /projects/add        | Menampilkan form untuk menambahkan project                   |
// | POST   | /projects/add        | Menambahkan data project ke database                         |
// | GET    | /projects/open       | Menampilkan seluruh project di database dengan status open   |
// | GET    | /projects/mine       | Menampilkan seluruh project yang di assign ke employee tertentu |
// | GET    | /projects/unassigned | Mengupdate jumlah stock buku berdasarkan form restock buku   |
// | GET    | /projects/delete/:id | Menghapus buku dari database                                 |