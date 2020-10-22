const { Project, Employee, ProjectEmployee } = require('../models/index')


class ProjectController{

  static show(res,req){
    Project.findAll({include : Employee})
    .then(data =>{
      res.render('project.ejs', {data})
    })
    .catch(err =>{
      res.send(err)
    })
  }

  static getProjectAdd(res,req){
    Employee.findAll()
    .then(data =>{
      res.render('addProject', {data})
    })
    .catch(err =>{
      res.send(err)
    })
  }

  static postProjectAdd(res,req){
    Project.create(req.body)
    .then(()=>{
      res.redirect('/add',)
    })
    .catch(err =>{
      res.send(err)
    })
  }

  static getProjectMine(res,req){
    Employee.findOne({where :{username : req.session.username}})
    .then(data =>{
      ProjectEmployee.findAll({where : {id: data.id}})
    })
    .catch(err =>{
      res.send(err)
    })
  }

  static getProjectUnassigned(res,req){
    Employee.findOne({where : {username : req.session.username}})
    .then(data =>{
      Project.findAll({include : Employee})
    })
    .catch(err =>{
      res.send(err)
    })
  }

  static getProjectDelete(res,req){
    Project.destroy({where : {id: req.params.id}})
    .then(data =>{
      res.redirect('/project.ejs')
    })
    .catch(err =>{
      res.send(err)
    })
  }

}

module.exports = ProjectController

// | GET    | /projects            | Menampilkan seluruh project yang ada di database                |
// | GET    | /projects/add        | Menampilkan form untuk menambahkan project                      |
// | POST   | /projects/add        | Menambahkan data project ke database                            |
// | GET    | /projects/assign     | Menampilkan seluruh project yang di assign ke employee tertentu |
// | GET    | /projects/unassigned | Menampilkan seluruh project yang belum di assign ke employee    |
// | GET    | /projects/delete/:id | Menghapus buku dari database                                    |