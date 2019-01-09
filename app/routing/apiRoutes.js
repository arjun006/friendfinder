var friends = require('../data/friends.js');

module.exports = function(app){

        app.get('/api/friends', function(req, res){
            res.json(friends);
        });

        app.post('/api/friends', function(req,res){

            let userData = req.body;
            let userAnswers = userData.answers;

            for(i=0; i<friends.length; i++){
                var matchDiff=0;
                for(j=0; j<friends.length;j++){
                    matchDiff+=Math.abs(friends[i].answers[i]-userAnswers[i]);
                    console.log(matchDiff);
                };
            friends.push(req.body);
            res.json(true);
            };
        });

}


