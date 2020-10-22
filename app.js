const express = require('express')
const app = express()
const port = 3000
const session = require('express-session')
const routes = require('./routes/index')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true}))
app.use(routes)

app.use(session({
  secret: "supercalifragilisticexpialidocious",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 120000
  }
}));

app.listen(port , () =>{
  console.log(`App berjalan di port ${port}`)
})