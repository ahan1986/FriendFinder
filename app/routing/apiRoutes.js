var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var friends = require('./../data/friends.js');

//route that will post information given through the users to this api
router.post('/api/friendsList', function (req, res) {
    var newFriend = req.body;

    friends.push(newFriend);

    return res.json(newFriend);

});

router.get('/api/friendsList', function (req, res) {
    return res.json(friends);

})

module.exports = router;
