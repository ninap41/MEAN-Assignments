var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Product = mongoose.model('Product');
// var User = mongoose.model('user');
var Score = mongoose.model('Score');



module.exports = {
    create: function(req, res, err) {
        console.log("MADE IT TO THE CREATE IN THE BACK")
        if(err){
          res.json( {'err' : 'there was an issue with your product creation'})
        }
        else{
            var message = ''
        var score = new Score(req.body);
        console.log("MADE IT TO THE CREATE IN THE BACK")
        score.user = req.session.name
        if(score.question1 == 'Right' ){
            score.percentage += 33;
            score.finalscore += 1;
        }else {
            score.percentage += 0;
            score.finalscore += 0;
        }
        if(score.question3 == 'Right'){
            score.percentage += 33
            score.finalscore += 1;
        }
        else{
            score.percentage += 0;
            score.finalscore += 0;
        }
        if(score.question2 == 'Right'){
            score.percentage += 33;
            score.finalscore += 1;
        }else{
            score.percentage += 0;
            score.finalscore += 0
        }
        if(score.percentage > 1){
         message=`that was great ${'score.user'}!  Your score is ${'score.finalscore'}/3 (%${'score.percentage'}) `
        }
        else{
            message=`that was terrible ${'score.user'}....  Your score is ${'score.finalscore'}/3 (%${'score.percentage'}) `
            
        }
        score.save() 
        res.json({'score': score, 'state': message})
        // User.findOne({_id: req.session.user}, function(err, user){
        // User.update({_id: req.body.id}, {$push: {"TheirProducts": product}}, function(err){
        //         })
        //     })
        }
       
      },


      find: function(req, res){
        Score.find({}, function (err, scores){
                res.json({'scoreResults': scores})
        });
    },
}