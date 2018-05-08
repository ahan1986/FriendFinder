// creating Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//set up the express app
var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.static('public'));
// setting up the express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//======================================================

var Route = require('./app/routing/htmlRoutes.js')
app.use(Route);

var Routes = require('./app/routing/apiRoutes.js');
app.use(Routes);

//======================================================

//Start the server to begin listening
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
})