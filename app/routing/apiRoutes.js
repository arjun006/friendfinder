var friends = require('../data/friends.js');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    
    app.post("/api/friends", function(req,res){
        var userAnswers = req.body.answers;
        var answersArray = [];
        var friendCount = 0;
        var friendMatch = 0;
        
        for(var i=0; i<friends.length; i++){
            var answersDiff = 0;
            //run through answers to compare friends
            for(var j=0; j<userAnswers.length; j++){
              answersDiff += (Math.abs(parseInt(friends[i].answers[j]) - parseInt(userAnswers[j])));
            }
      
            //push results into answersArray
            answersArray.push(answersDiff);
          }
      
          //after all friends are compared, find best match
          for(var i=0; i<answersArray.length; i++){
            if(answersArray[i] <= answersArray[friendMatch]){
              friendMatch = i;
            }
          }
      
          //return friendMatch data
          var bestFriend = friends[friendMatch];
          res.json(bestFriend);
      
          //pushes new submission into the friendsList array
          friends.push(req.body);
    });
//--------------------------------------------------------------
}


