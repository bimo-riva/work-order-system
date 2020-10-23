require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT||3000
const session = require('express-session')
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


app.listen(port , () =>{
  console.log(`App berjalan di port ${port}`)
})