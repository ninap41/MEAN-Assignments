var mongoose = require('mongoose');
var Person = mongoose.model('Person');



module.exports = {

  show: function(req, res) {
    Person.find({}, function(err, people) {
      res.json({ people: people });
    
    
    })
  },


  create: function(req, res) {
    var person = new Person({name: req.params.name});
    person.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/')
      }
    })
  },
  delete: function(req, res){
    Person.remove({name: req.params.name}, function (err){
        if(err){
            console.log("could not remove person from db")
        }
        else{
            console.log("removed person by id" + req.params.name)
            res.redirect('/')
        }
    })
  },


    show_single: function(req, res){
      Person.find({name: req.params.name}, function(err, person){
          if(err){
              console.log("failure retieving ", req.params.name)
          }
          else{
              res.json({'person': person})
          }
      })
  }



}
  
