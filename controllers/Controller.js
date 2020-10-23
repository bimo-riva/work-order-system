const bcrypt = require('bcrypt')
const { Op } = require("sequelize")

const {Employee, Project, ProjectEmployee} = require('../models')

const { isEmail } = require('../helpers/index.js')

class Controller {

  static home(req, res) {

    let username
    let position

    if(req.session.isLoggedIn) {
      username = req.session.username
      position = req.session.position      
    }

    res.render('home', { username, position })
    
  }

  static logout(req, res) {

    if(req.session.isLoggedIn) {
      req.session.destroy()

      res.redirect('/')
    }

  }

  static signup(req, res) {
    let username = req.session.isLoggedIn ? req.session.username : ''
      let position = req.session.isLoggedIn ? req.session.position : ''
    if (req.query.err) {
      res.render('signup', {errorSignup: true, username, position})
    } else {
      res.render('signup', {errorSignup: false, username, position})
    }

  }

  static postSignup(req, res) {

    console.log(req.body)


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
          if (result) {
            req.session.isLoggedIn = true
            req.session.username = data.username
            req.session.position = data.position

            res.redirect('/')
          } else {
            res.redirect('/login?err=true')

          }
        })
        .catch(err => res.send(err))
      }
    })

  }
}

module.exports = Controller