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
//friends array to add all the datas
var friends = [];

//Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, 'survey.html'));
});

//routes for looking at the apis
app.get('/api/friendsList/:buddy', function( req, res) {
    var chosen = req.params.buddy;

    console.log(chosen);

// using a method in javascript for arrays called find() to check for a specific friend who had the same choices.  Going to use a boolean value to deterine if a specific element in the array matches.
    const friend = friends.find(f => f.name === chosen);
    if(!friend) res.status(404).send("Nothing found");
    res.send(friend);
});

//route that will post information given through the users to this api
app.post('/api/friendsList', function(req, res) {
    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
})

//======================================================

//Start the server to begin listening
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
})