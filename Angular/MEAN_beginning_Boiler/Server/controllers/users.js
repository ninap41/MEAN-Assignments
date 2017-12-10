var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = mongoose.model('Product');
var User = mongoose.model('User');

module.exports = {

  show: function(req, res) {
  
    User.find({}, function(err, users) {
      console.log(req.session.currUser)
      res.render('users', {users: users, logged_user:req.session.currUser});
    })
  },

  

  register: function(req, res, err) {
    if(err){
      res.json('there was an issue with your registration')
    }
    else{
    var user = new User(req.body);
    user.save() 
    req.session.user = user
    // this._dataService.currentUser(req.session.user);
    }
  },

  login: function(req, res) {
    User.findOne({email:req.body.email}, function(err,user){
        console.log("~~~~~~~~~~~~~~~~~~~");
        console.log(user.email);
        console.log(user.password);
        console.log(req.body.email);
       console.log("~~~~~~~~~~~~~~~~~~~");
           if(err){
           
             console.log(err);
             res.json({'err': err.errors})
           }
           else{
                if(user.email === req.body.email){
                }
              else{
                console.log("user not logged, field empty");   
                res.json({'err': "user not logged, field empty"})
              }
                 
            }
           
  });
},

logout: function(req, res) {
  req.session.destroy(function(err) {
      if (err) {
        console.log("logout error")
        res.redirect('/');
      } else {
        console.log("logged out")
        res.redirect('/');
      }
  });
},

find: function(req, res){
  User.find({}, function (err, users){
          res.json({'users': users})
  });
},

// delete: function(req,res) {
//   User.remove({_id:req.params.id}, function(err){
//     console.log("deleted user")
//        res.redirect('/');
     
//      });

// }
}
  
        
      