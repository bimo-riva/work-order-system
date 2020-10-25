const { Op } = require("sequelize");

const { Project, Employee, EmployeeProject, Comment, Role, Permission, RolePermission } = require('../models/')
const {stringify} = require('../helpers')
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

class ProjectController{

  static show(req, res){

    let username = req.user ? req.user.username : ''
    let roles = req.user ? req.user.roles : []

    console.log({username, roles})

 
    // Project.findAll()
    Project.findAll({include : [Employee]})
    .then(data =>{
      console.log(stringify(data))
      res.render('project.ejs', {data, username, roles})
    })
    .catch(err =>{
      res.send(err)
    })
  }

  static getProjectAdd(req, res){
    Employee.findAll()
    .then(data =>{
      let username = req.session.isAuthenticated ? req.session.username : ''
      let roles = req.session.isAuthenticated ? req.session.roles : ''
      res.render('addProject', {data, username, roles, GOOGLE_API_KEY})
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
      let username = req.session.isAuthenticated ? req.session.username : ''
      let roles = req.session.isAuthenticated ? req.session.roles : ''
      res.render('projectEdit', {data, employee, username, roles})
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
    let username = req.isAuthenticated() ? req.user.username : ''
    let roles = req.isAuthenticated() ? req.user.roles : ''
    let employees
    let members

    Employee.findAll()
    .then(data =>{
      employees = data
      return EmployeeProject.findAll({ 
        include: Employee, 
        where :{ProjectId : req.params.id},
        order: [['isLeader', 'DESC']]
      })
    })
    .then(data =>{
      members = data

      return Project.findByPk(req.params.id)
    })
    .then(project => {

      employees = employees.map(el => el.toJSON())
      members = members.map(el => el.toJSON())


      // employees = employees.map(el => {
      //   members.map(member => {
      //     if (el.name === member.name) {

      //     }
      //   })
      // })

      res.render('addTeam', {project, members, employees, username, roles})

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

    return EmployeeProject.findOne({
      where: {
        [Op.and]: [
          {ProjectId: req.params.id},
          {EmployeeId: req.body.EmployeeId}
        ]
      },
      include: Employee
    })
    .then(data => {
      if (data) {
        req.flash('error', `${data.Employee.name} is already in the team`);
        res.redirect(`/projects/teams/${req.params.id}`)
      } else {

        let isLeader
        if (req.body.isLeader  === 'on') {
          isLeader = true
        } else {
          isLeader = false
        }
    
        input.isLeader = isLeader
    
        EmployeeProject.create(input)
        .then(()=>{
          res.redirect(`/projects/teams/${req.params.id}`)
        })
        .catch(err =>{
          res.send(err)
        })
        
      }
    })

  }

  static removeMember(req, res) {

    EmployeeProject.destroy({
      where: {
        [Op.and]: [
          {ProjectId: req.params.ProjectId},
          {EmployeeId: req.params.EmployeeId}
        ]
      }
    })
    .then(() => {
      res.redirect(`/projects/teams/${req.params.ProjectId}`)
    })
    .catch(err => res.send(err))
    
  }
}

module.exports = ProjectController

// | GET    | /projects            | Menampilkan seluruh project yang ada di database                |
// | GET    | /projects/add        | Menampilkan form untuk menambahkan project                      |
// | POST   | /projects/add        | Menambahkan data project ke database                            |
// | GET    | /projects/assign     | Menampilkan seluruh project yang di assign ke employee tertentu |
// | GET    | /projects/unassigned | Menampilkan seluruh project yang belum di assign ke employee    |
// | GET    | /projects/delete/:id | Menghapus buku dari database                                    |
