const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const isEmail = require('../helpers/index')
const { Employee } = require('../models')


// Serialize sessions -> creates cookies
passport.serializeUser( (user, done) => {
  done(null, user)
})

// Deserialize sessions -> reads cookies 
passport.deserializeUser( (user, done) => {
  Employee.findByPk(user.id)
  .then( user => done(null, user))
  .catch( err => done(err, null))
})

// For authentication purposes
passport.use(new LocalStrategy({
  usernameField: 'user',
} ,(usernameOrEmail, password, done) => {
      
  let input = {}

    if (isEmail(usernameOrEmail)) {
      input.email = usernameOrEmail
    } else {
      input.username = usernameOrEmail
    }

    Employee.findOne({
      where:  input
    })
    .then(data => {
      if (!data) {
        // res.redirect('/login?err=true')
        return done(null, false, { message: 'Incorrect username' })
      } else {
        bcrypt.compare(password, data.password)
        .then(result => {
          if (!result) {
            // res.redirect('/login?err=true')
            return done(null, false, { message: 'Incorrect password'})
            
          } else {
            // req.session.isAuthenticated = true
            // req.session.username = data.username
            
            return EmployeeRole.findAll({where: { EmployeeId: data.id}})
          }
        })
        .then(roles => {
          req.session.roles = roles
          res.redirect('/')
        })
        .catch(err => {return done(err)})
      }
    })

}
));