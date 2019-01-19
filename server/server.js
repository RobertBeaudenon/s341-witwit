const express = require('express')
const bodyParser = require('body-parser')
var mySql = require('mysql')
//The port for our backend server
const PORT = 3002

//creating a connection to our database:
var con = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'witwit'
})
app = express()
app.use(bodyParser.json())
//To be able to use the login-register API
const loginRegisterApi = require('./routes/login_register')
app.use('/login_register', loginRegisterApi)

//To make suer it is wokring and on which port:
app.get('/', (req, res) => {
  res.send("I am the server")
})

con.connect(function (err) {
  if (err) throw err;
  console.log("connect")
  con.query("Select * from users", function (err, result) {
    if (err) throw err;
    console.log(result);
  })
})

app.listen(PORT, function () {
  console.log("The server is working on port: " + PORT)
})
