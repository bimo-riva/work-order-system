const { Project, Employee, EmployeeProject } = require('../models/index')


const {convertTime} = require('../helpers')


class ProjectController{

  static show(req, res){
    Project.findAll({include : Employee})
    .then(data =>{
      let username = req.session.isLoggedIn ? req.session.username : ''
      let role = req.session.isLoggedIn ? req.session.role : ''
  
      // console.log(req.session)

      console.log({username, role})
      
      res.render('project.ejs', {data, username, role, convertTime})
    })
    .catch(err =>{
      res.send(err)
    })
  }

  static getProjectAdd(req, res){
    Employee.findAll()
    .then(data =>{
      let username = req.session.isLoggedIn ? req.session.username : ''
      let role = req.session.isLoggedIn ? req.session.role : ''
      res.render('addProject', {data, username, role})
    })
    .catch(err =>{
      res.send(err)
    })
  }

  static postProjectAdd(req,res){
    // console.log(req.body)

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
      let username = req.session.isLoggedIn ? req.session.username : ''
      let role = req.session.isLoggedIn ? req.session.role : ''
      res.render('projectEdit', {data, employee, username, role})
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
      EmployeeProject.findAll({where : {id: data.id}})
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

  static getTeams(req,res){
    let username = req.session.isLoggedIn ? req.session.username : ''
    let role = req.session.isLoggedIn ? req.session.role : ''
    let employee
    let members
    Employee.findAll({where : {role : 'Engineer'}})
    .then(data =>{
      employee = data
      return EmployeeProject.findAll({ include: Employee, where :{ProjectId : req.params.id}})
    })
    .then(data =>{
      members = data

      return Project.findByPk(req.params.id)
    })
    .then(project => {
      console.log(JSON.stringify(members,null,2))
      res.render('addTeam', {project, members, employee, username, role})

    })
    .catch(err=>{
      res.send(err)
    })
  }
  
  static postTeams(req,res){
    let input = {
      EmployeeId : req.body.EmployeeId,
      ProjectId : req.params.id,
    }

    let isLeader
    if (req.body.isLeader  === 'on') {
      isLeader = true
    } else {
      isLeader = false
    }

    input.isLeader = isLeader

    console.log({input})

    EmployeeProject.create(input)
    .then(data=>{
      res.redirect(`/projects/teams/${req.params.id}`)
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
