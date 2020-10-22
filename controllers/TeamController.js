const{Employee, ProjectEmployee} = require('../models/index')

class TeamController{
  static getTeams(req,res){
    let employee
    Employee.findAll({where : {position : 'Engineer'}})
    .then(data =>{
      employee = data
      return ProjectEmployee.findAll({where :{ProjectId : req.params.id}})
    })
    .then(data =>{
      res.render('addTeams')
    })
    .catch(err=>{
      res.send(err)
    })
  }
  
  static postTeams(req,res){
    ProjectEmployee.create(req.body)
    .then(data=>{
      res.redirect('/projects/editTeam')
    })
    .catch(err =>{
      res.send(err)
    })
  }

}

module.exports=TeamController

