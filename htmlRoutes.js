var express = require('express');
var Routes = express.Router();
var app = express();
var path = require('path');

// going to need express application in each of the files that have the routes. We are going to assign it to module.exports so that all other files can access this 'app' variable/object. 
// var app = module.exports = express();

//Routes

Routes.get('/', function(req, res) {
    
    res.sendFile(path.join(__dirname, './app/public/home.html'));
});

Routes.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, './app/public/survey.html'));
});

module.exports = Routes;