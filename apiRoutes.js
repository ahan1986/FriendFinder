var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var friends = require('./app/data/friends.js');

// //routes for looking at the apis
router.get('/api/friendsList/:buddy', function( req, res) {
    var chosen = req.params.buddy;

    console.log(chosen);

// using a method in javascript for arrays called find() to check for a specific friend who had the same choices.  Going to use a boolean value to deterine if a specific element in the array matches.
    // const friend = friends.find(f => f.name === chosen);
    // if(!friend) res.status(404).send("Nothing found");
    res.send(chosen);
});

//route that will post information given through the users to this api
router.post('/api/friendsList', function(req, res) {
    var newFriend = req.body;
    // console.log(newFriend);
    
    friends.push(newFriend);
    return res.json(newFriend);
    
});

router.get('/api/friendsList', function(req, res) {
            
                // var aa = []; //empty array to hold sum of values of each array
                // var b = friends.map(x => parseInt(x)); //parseInt the values the current user inputed
                // var currentInputSum = b.reduce((a, b) => a + b); // getting the sum of the current users inputs
                // var data = friends;
                // //looping through all the datas stored except the current
                // for (var i = 0; i < data.length; i++) {
                //     var bb = []; // empty array to hold each one array's total sum

                //     for (var j = 0; j < data[i].scores.length; j++) {

                //         bb.push(parseInt(data[i].scores[j]));//parsing the value of each data in the array and pushing it to bb
                //     }

                //     aa.push(bb.reduce((a, b) => a + b)); // pushing the total sum of each array into var aa
                //     var sumOfCurrentIndexDataArray = bb.reduce((a,b) => a + b); 
                //     // console.log(sumOfCurrentIndexDataArray);
                    
                //     // if however the current users sum is equal to the sum of the current index array then it will return that data's photo and the else if statements after that will match if it's only + or - 1 or 2 away.
                //     if(currentInputSum === sumOfCurrentIndexDataArray) {
                //         console.log(data[i]);
                //         // return data[i].photo;
                //         return res.json(data[i]);
                //     } else if(currentInputSum - 1 == sumOfCurrentIndexDataArray ||currentInputSum  + 1 == sumOfCurrentIndexDataArray) {
                //         console.log('hello2');
                //         return res.json(data[i].photo);
                //     } else if(currentInputSum - 2 == sumOfCurrentIndexDataArray ||currentInputSum  + 2 == sumOfCurrentIndexDataArray) {
                //         return res.json(data[i].photo);
                //     }
                // }
                // //if no value was either equal or plus or minus 1 or 2 away, all the sum will be sorted including the current users input and I will just get the value in front or behind it and go back through the array and select the data that has the same sum.  This is long and annoying.... I know. Hopefully the solutions file will show a better way of doing this.
                // // console.log(aa);

                // aa.push(currentInputSum);
                // aa.sort((a, b) => a - b);

                return res.json(friends);
    
})

module.exports = router;
