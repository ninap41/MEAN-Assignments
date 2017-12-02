var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt =require('bcrypt');
var mongodbErrorHandler = require('mongoose-mongodb-errors')

module.exports = {

  show: function(req, res) {
  
    User.find({}, function(err, users,logged_user) {
      //  temp = "this is message";
      // // temp=JSON.stringify(req.tempData.get('test_val'));
      console.log(req.session.currUser)
      res.render('users', {users: users, logged_user:req.session.currUser});
    })
  },

  register: function(req, res,err) {
    
    if(err){
      console.log("error");
      res.json({'err': err})
    }
    else{
    var user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      confirm_password: req.body.confirm_password,
      birthday: req.body.birthday,
    });
    if(req.body.password === req.body.confirm_password){
    user.save(function(err) {
      if(err){
        console.log("something went wrong");
        console.log(err);
     
        err = {
          errors:
              {
              User_errors:
                  {
                    message:"some string of errors",
                    kind:"what didn't work",
                    path:"reference to the schema's name",
                    value:"cause of the initial error"
                  }
              },
          name: "Validation error"
          }
          res.json({'err': err})

      } else {
        req.session.currUser = user; 
       
        res.redirect('/success');
      }
    });
  }
  else {
    console.log("your passwords dont match")
    res.redirect('/');
  }
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
             res.json({'err': err})
           }
           else{
                if(user.email === req.body.email){
                    if (bcrypt.compareSync(req.body.password,  user.password)) {
                        req.session.currUser = user; 
                        let logged_user= req.session.currUser 
                        // res.json(user._id); 
                        console.log("~~~~~~~~~~~~~~~~~~~");  
                        console.log(logged_user);   
                        console.log("~~~~~~~~~~~~~~~~~~~");
                        res.redirect('/success');
                    }
                    else {
                      res.redirect('/');
                    }

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

delete: function(req,res) {
  User.remove({_id:req.params.id}, function(err){
    console.log("deleted user")
       res.redirect('/');
     
     });

},
}
  
        
      