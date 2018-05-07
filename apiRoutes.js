var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var friends = require('./app/data/friends.js');

// //routes for looking at the apis
// router.get('/api/friendsList/:buddy', function( req, res) {
//     var chosen = req.params.buddy;

//     console.log(chosen);

// // using a method in javascript for arrays called find() to check for a specific friend who had the same choices.  Going to use a boolean value to deterine if a specific element in the array matches.
//     // const friend = friends.find(f => f.name === chosen);
//     // if(!friend) res.status(404).send("Nothing found");
//     res.send(chosen);
// });

//route that will post information given through the users to this api
router.post('/api/friendsList', function(req, res) {
    var newFriend = req.body;
    // console.log(newFriend);
    friends.push(newFriend);
    return res.json(newFriend);
    
});

router.get('/api/friendsList', function(req, res) {
    // for(var i =0; i<friends.length; i++) {
    //    var a = friends[i].scores;
    //    for(var j =0; j<friends[i].scores.length; j++) {
    //        console.log(parseInt(a[j]));
    //    }
    // }
    
    return res.json(friends);
})

module.exports = router;
