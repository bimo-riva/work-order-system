const { Employee, Project } = require('../models/index')

class EmployeeController {
  static show(req,res){
    Employee.findAll({
      include : Project
    })
    .then(data =>{

      let username = req.session.isLoggedIn ? req.session.username : ''
      let position = req.session.isLoggedIn ? req.session.position : ''

      data.forEach(element => {
        if(element.Projects.length === 0){
          element.status = 'Available'
        }
        else{
          element.status = 'On Duty'
        }        
      });
      res.render('employee', {data, username, position})
    })
    .catch(err =>{
      res.send(err)
    })
  }
}

module.exports = EmployeeController