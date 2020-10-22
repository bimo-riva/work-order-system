const { Employee, Project } = require('../models/index')

class EmployeeController {
  static show(req,res){
    Employee.findAll({
      include : Project
    })
    .then(data =>{
      data.forEach(element => {
        if(element.Projects.length === 0){
          element.status = 'Available'
        }
        else{
          element.status = 'On Duty'
        }        
      });
      res.render('employee', {data})
    })
    .catch(err =>{
      res.send(err)
    })
  }

  static getTeams(req,res){

    
  }
}

module.exports = EmployeeController