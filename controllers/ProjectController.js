const { Project, Employee, ProjectEmployee } = require('../models/index')



class ProjectController{

  static show(req, res){
    Project.findAll({include : Employee})
    .then(data =>{
      // console.log(JSON.stringify(data,null,2))
      res.render('project.ejs', {data})
    })
    .catch(err =>{
      res.send(err)
    })
  }

  static getProjectAdd(req, res){
    Employee.findAll()
    .then(data =>{
      res.render('addProject', {data})
    })
    .catch(err =>{
      res.send(err)
    })
  }

  static postProjectAdd(req,res){
    console.log(req.body)

    Project.create(req.body)
    .then(()=>{
      res.redirect('/projects',)
    })
    .catch(err =>{
      res.send(err)
    })
  }

  static getProjectEdit(req,res){
    let employee;
    Employee.findAll()
    .then(data =>{
      employee = data
      return Project.findByPk(req.params.id)
    })
    .then(data =>{
      res.render('projectEdit', {data, employee})
    })
    .catch(err =>{
      res.send(err)
    })
  }

  static postProjectEdit(req,res){
    console.log(req.body)
    Project.update(req.body, {where : {id : req.params.id}})
    .then(data =>{
      res.redirect('/projects')
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

  static getProjectUnassigned(req, res){
    Employee.findOne({where : {username : req.session.username}})
    .then(data =>{
      Project.findAll({include : Employee})
    })
    .catch(err =>{
      res.send(err)
    })
  }

  static getProjectDelete(req, res){
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
