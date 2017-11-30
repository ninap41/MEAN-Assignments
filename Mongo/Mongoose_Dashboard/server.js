// require express
var express = require("express");//________________________________________________REQUIRE_________________
var path = require("path");
var session = require('express-session'); //added session goes here
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); //Here comes the goose REQUIRE IT


var app = express();

app.use(session({secret: 'keep it secret keep it safe'})); //________________________USE___________________
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(__dirname + '/css')); //USE YOUR DIR FOR STYLESHEET

app.set('views', path.join(__dirname, './views')); //________________________________SET____________________
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/Mongoose_Dash1');//____________________________GOOSE___________________
mongoose.Promise = global.Promise;
//_____________SCHEMAS_START__________________________________________________________________________________

var MongooseSchema = new mongoose.Schema({
    name: {type: String, minlength: 1,required: true},
    age: {type: Number, min: 1, max: 150, required: true},
    personality: {type: String, minlength: 1, required: true},
   }, { versionKey: false })

   


   mongoose.model('Mongoose', MongooseSchema); // We are setting this Schema in our Models as 'User'
   var Mongoose = mongoose.model('Mongoose') 


//___________________GET_ROUTES________________________________________________________________________________


  app.get('/', function(req,res){


      Mongoose.find(function(error, mongoose) {
      if(error) {
          console.log("something went wrong");
          console.log(error);
      } else {
          console.log("success");
          console.log(mongoose);
      }
      res.render("index", {mongooses: mongoose});
      });
  });

  app.get('/New_Mongoose', function(req,res){
        Mongoose.find({}, function(error){
              
                  res.render('New_Mongoose');
              
          });
    });
   

  app.get('/Edit_Mongoose/:id', function(req,res){
    Mongoose.findOne({_id:req.params.id}, function(err, single_mongoose){
        res.render('Edit_Mongoose', {mongoose: single_mongoose});
      });
  });

  app.post('/Edit_Mongoose/edit/:id', function(req,res){
    Mongoose.findOne({_id:req.params.id}, function(err, single_mongoose){
      if(err){
        console.log('Something went wrong');
        res.redirect('/');
      }
      
        else{
        single_mongoose.name = req.body.name;
        single_mongoose.age =  req.body.age;
        single_mongoose.personality= req.body.personality;
        single_mongoose.save(function(err, single_mongoose) {   
          if(err) {
            console.log('something went wrong');
            console.log(err);
            res.redirect('/');
            } 
          else { 
            console.log('successfully updated mongoose!');
            res.redirect('/Single_Mongoose/'+req.params.id);
            }
            
          })  
        }
      });
  });

  app.get('/Single_Mongoose/:id', function(req,res){
    Mongoose.findOne({_id:req.params.id}, function(err,single_mongoose){
     
        res.render('Single_Mongoose', {mongoose: single_mongoose});
      
      });
  });
 


//___________________POST_ROUTES________________________________________________________________________________





app.post('/createmongoose', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var mongoose = new Mongoose();
    mongoose.name = req.body.name;
    mongoose.age = req.body.age;
    mongoose.personality = req.body.personality;

    mongoose.save(function(err) {
      
      if(err) {
        console.log('something went wrong');
        res.redirect('/');
        res.send(err);
      } else { 
        console.log('successfully added a user!');
        res.redirect('/');
      }
    })
  })

  app.post('/destroymongoose/:id', function(req,res){
    Mongoose.remove({_id:req.params.id}, function(err){
     
        res.redirect('/');
      
      });
  
  })
    
//_____________________________________LISTEN __________________________________________________________________

app.listen(8000, function() {
 console.log("listening on port 8000");
});