const { Employee, Project } = require('../models/index')

class EmployeeController {
  static show(req,res){
    Employee.findAll({
      include : Project
    })
    .then(data =>{
      res.render('employee', {data})
    })
    .catch(err =>{
      res.send(err)
    })
  }
}

module.exports = EmployeeController