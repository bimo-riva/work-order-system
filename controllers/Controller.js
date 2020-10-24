const bcrypt = require('bcrypt')
const { Op } = require("sequelize")

const {Employee, Project, EmployeeProject, EmployeeRole } = require('../models')

const { isEmail } = require('../helpers/index.js')

class Controller {

  static home(req, res) {

    let username
    let roles

    if(req.session.isLoggedIn) {
      username = req.session.username
      roles = req.session.roles      
    }

    res.render('home', { username, roles })
    
  }

  static logout(req, res) {

    if(req.session.isLoggedIn) {
      req.session.destroy()

      res.redirect('/')
    }

  }

  static signup(req, res) {
    let username = req.session.isLoggedIn ? req.session.username : ''
      let role = req.session.isLoggedIn ? req.session.role : ''
    if (req.query.err) {
      res.render('signup', {errorSignup: true, username, roles})
    } else {
      res.render('signup', {errorSignup: false, username, roles})
    }

  }

  static postSignup(req, res) {

    // console.log(req.body)

    Employee.create(req.body)
    .then(() => res.redirect('/'))
    .catch(err => {
      res.send(err)
    })

  }

  static login(req, res) {
    if (req.query.err) {
      res.render('login', {errorLogin: true})
    } else {
      res.render('login', {errorLogin: false})
    }

  }

  static postLogin(req, res) {

    console.log(req.body)

    let input = {}

    if (isEmail(req.body.user)) {
      input.email = req.body.user
    } else {
      input.username = req.body.user

    }

    Employee.findOne({
      where:  input
    })
    .then(data => {
      if (!data) {
        res.redirect('/login?err=true')
      } else {
        bcrypt.compare(req.body.password, data.password)
        .then(result => {
          if (!result) {
            res.redirect('/login?err=true')
            
          } else {
            req.session.isLoggedIn = true
            req.session.username = data.username
            
            return EmployeeRole.findAll({where: { EmployeeId: data.id}})
          }
        })
        .then(roles => {
          req.session.roles = roles
          res.redirect('/')
        })
        .catch(err => res.send(err))
      }
    })

  }
}

module.exports = Controller