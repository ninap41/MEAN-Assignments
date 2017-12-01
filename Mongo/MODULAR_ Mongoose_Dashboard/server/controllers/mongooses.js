var mongoose = require('mongoose');
var Mongoose = mongoose.model('Mongoose');


module.exports = {


    show: function(req, res) {
        Mongoose.find(function(err, mongooses) {
            if(err) {
                console.log("something went wrong");
                console.log(err);
            } else {
                console.log("success");
                console.log(mongooses);
            }
            res.render("index", {mongooses: mongooses});
            })
         },
       
     
    create: function(req, res) {
        console.log("POST DATA", req.body);
        var mongoose = new Mongoose();
        mongoose.name = req.body.name;
        mongoose.age = req.body.age;
        mongoose.personality = req.body.personality;
    
        mongoose.save(function(err) {
          
          if(err) {
            console.log('something went wrong');
            res.redirect('/');
          } else { 
            console.log('successfully added a user!');
            res.redirect('/');
          }
        }) 
    },


    show_single_mongoose: function(req, res){
        Mongoose.findOne({_id:req.params.id}, function(err,single_mongoose){

            if (err) {
                console.log(err);
            }
            else {
                res.render('Single_Mongoose', {mongoose: single_mongoose});
            }
         });
    },


    destroy: function(req,res) {
        Mongoose.remove({_id:req.params.id}, function(err){
            
            
            res.redirect('/');
           });
    },

    edit: function(req,res){
        Mongoose.findOne({_id:req.params.id}, function(err,edit_mongoose){
            
                if (err) {
                    console.log(err);
                }
                else {
                    res.render('Edit_Mongoose', {mongoose: edit_mongoose});
                }
        });

    },

    update: function(req,res) {
        Mongoose.update({ _id: req.params.id }, req.body, function (err, updated_data) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect('/');
            }
        });
    },






}




// app.post('/createmongoose', function(req, res) {
//     console.log("POST DATA", req.body);
//     // create a new User with the name and age corresponding to those from req.body
//     var mongoose = new Mongoose();
//     mongoose.name = req.body.name;
//     mongoose.age = req.body.age;
//     mongoose.personality = req.body.personality;

//     mongoose.save(function(err) {
      
//       if(err) {
//         console.log('something went wrong');
//         res.redirect('/');
//         res.send(err);
//       } else { 
//         console.log('successfully added a user!');
//         res.redirect('/');
//       }
//     })
//   })

//   app.post('/destroymongoose/:id', function(req,res){
//     Mongoose.remove({_id:req.params.id}, function(err){
//        res.redirect('/');
//       });
//   })