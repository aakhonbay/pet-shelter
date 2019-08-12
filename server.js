var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(__dirname + '/pet-shelter/dist/pet-shelter')); // dist is deleted when pushing to githun
app.use(express.static(__dirname + '/client/dist/pet-shelter')); // moving dist to client folder
require('./server/model')
require('./server/routes')(app)
// app.all("*", (request, response, next)=>{
//   console.log(__dirname + '/pet-shelter/dist/pet-shelter/index.html')
//   response.sendFile(__dirname + '/pet-shelter/dist/pet-shelter/index.html')
// })
const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`listening on port ${port}`))