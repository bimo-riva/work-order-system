const routes = require('express').Router()
const employeeRoutes = require('./employees')
const projectRoutes = require('./projects')

routes.get('/login', (req,res) =>{
  res.send('tampilkan halaman login')
})

routes.post('/login', (req,res)=>{
  res.send('tampilkan halaman login')
})

routes.get('/', (req,res)=>{
  res.render('home')
})

routes.use('/employees', employeeRoutes)
routes.use('/projects', projectRoutes)

module.exports = routes


// | Method | Route                | Description                                                     |
// | :----- | :------------------- | :---------------------------------------------------------------|
// | GET    | /login               | Menampilkan halaman login                                       |
// | POST   | /login               | Memproses input login                                           |
// | GET    | /employees           | Menampilkan seluruh employee yang ada di database               |
// | GET    | /projects            | Menampilkan seluruh project yang ada di database                |
// | GET    | /projects/add        | Menampilkan form untuk menambahkan project                      |
// | POST   | /projects/add        | Menambahkan data project ke database                            |
// | GET    | /projects/open       | Menampilkan seluruh project di database dengan status open      |
// | GET    | /projects/mine       | Menampilkan seluruh project yang di assign ke employee tertentu |
// | GET    | /projects/unassigned | Mengupdate jumlah stock buku berdasarkan form restock buku      |
// | GET    | /projects/delete/:id | Menghapus buku dari database                                    |