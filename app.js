require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT||3000
const session = require('express-session')
const passport = require('passport')
const passportConfig = require('./config/passport')
const flash = require('express-flash')

const routes = require('./routes/index')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true}))
app.use(session({
  secret: "supersecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 120000
  }
}));

app.use(routes)
app.use(express.static('public'))

app.use(passport.initialize());
app.use(passport.session());
app.use(flash())



app.listen(port , () =>{
  console.log(`App berjalan di port ${port}`)
})