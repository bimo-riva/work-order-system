const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const {isEmail} = require('../helpers/index')
const { Employee, Role } = require('../models')


// Serialize sessions -> creates cookies
passport.serializeUser( (user, done) => {
  done(null, user)
})

// Deserialize sessions -> reads cookies 
passport.deserializeUser( (user, done) => {
  Employee.findOne({where: { username: user.username }, include: Role})
  .then( user => {
    
    let roles = user.Roles.map(role => role.name)
    
    return done(null, {username: user.username, roles})})
  .catch( err => done(err, null))
})

// For authentication purposes
passport.use(new LocalStrategy({
    usernameField: 'user',
    passReqToCallback : true
  } ,(req, usernameOrEmail, password, done) => {

    let input = {}
    let user
    let roles

    if (isEmail(usernameOrEmail)) {
      input.email = usernameOrEmail
    } else {
      input.username = usernameOrEmail
    }

    Employee.findOne({
      where:  input,
      include: [{model: Role}]
    })
    .then(data => {
      if (!data) {
        return done(null, false, { message: 'Incorrect username or password' })
      } 

      user = data
      roles = data.Roles.map( role => role.name)

      return bcrypt.compare(password, user.password)
    })
    .then(result => {
      if (!result) {
        return done(null, false, { message: 'Incorrect username or password'})
        
      } else {
        return done(null, {username: user.username, roles })
      }
    })
    .catch(err => {return done(err)})

  }
));