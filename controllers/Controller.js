const bcrypt = require('bcrypt')

const passport = require('passport')

const {Employee, EmployeeRole } = require('../models')

const { isEmail } = require('../helpers/index.js')

const { destroySession } = require('../middlewares')


class Controller {

  static home(req, res) {

    let username
    let roles

    if(req.session.isAuthenticated) {
      username = req.session.username
      roles = req.session.roles      
    }

    res.render('home', { username, roles })
    
  }

  static logout(req, res) {
    req.logOut()
    req.session.destroy()
    res.redirect('/')

  }

  static signup(req, res) {
    let username = req.session.isAuthenticated ? req.session.username : ''
      let roles = req.session.isAuthenticated ? req.session.roles : ''
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

    res.render('login')

  }



}

module.exports = Controller