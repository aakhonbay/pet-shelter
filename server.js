var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/pet-shelter/dist/pet-shelter'));
require('./server/model')
require('./server/routes')(app)
// app.all("*", (request, response, next)=>{
//   console.log(__dirname + '/pet-shelter/dist/pet-shelter/index.html')
//   response.sendFile(__dirname + '/pet-shelter/dist/pet-shelter/index.html')
// })
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`listening on port ${port}`))