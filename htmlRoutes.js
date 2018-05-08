var express = require('express');
var Routes = express.Router();
var app = express();
var path = require('path');

//Routes

Routes.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './app/public/home.html'));
});

Routes.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, './app/public/survey.html'));
});

module.exports = Routes;