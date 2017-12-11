var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const session = require('express-session');
const bcrypt = require('bcrypt');

var Product = mongoose.model('Product');
var User = mongoose.model('User');

mongoose.Promise = global.Promise;

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
    res.render('user', {LoggedUser: req.session.user});
    
    }
  },

//   register: function(req, res,err) {
    
//     if(err){
//       console.log("error");
//       res.json({'err': err.errors})
//     }
//     else{
//     var user = new User({
//       first_name: req.body.first_name,
//       last_name: req.body.last_name,
//       email: req.body.email,
//       password: req.body.password,
//       confirm_password: req.body.confirm_password,
//       birthday: req.body.birthday,
//     });
//     if(req.body.password === req.body.confirm_password){
//     user.save(function(err) {
//       if(err){
//         console.log("something went wrong");
//         console.log(err.errors);
     
//         err = {
//           errors:
//               {
//               User_errors:
//                   {
//                     message:"some string of errors",
//                     kind:"what didn't work",
//                     path:"reference to the schema's name",
//                     value:"cause of the initial error"
//                   }
//               },
//           name: "Validation error"
//           }
//           res.json({'err': err.errors})

//       } else {
//         req.session.currUser = user; 
       
//         res.redirect('/success');
//       }
//     });
//   }
//   else {
//     console.log("your passwords dont match")
//     res.redirect('/');
//   }
// }

//   },

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
  
        
      