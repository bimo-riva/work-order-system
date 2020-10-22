const { Employee, Project } = require('../models/index')

class EmployeeController {
  static show(req,res){
    Employee.findAll({
      include : Project
    })
    .then(data =>{
      console.log(JSON.stringify(data,null,2))
      res.render('employee', {data})
    })
    .catch(err =>{
      res.send(err)
    })
  }
}

module.exports = EmployeeController