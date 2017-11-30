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

mongoose.connect('mongodb://localhost/basic_mongoose');//____________________________GOOSE___________________
mongoose.Promise = global.Promise;
//_____________SCHEMAS_START__________________________________________________________________________________

var UserSchema = new mongoose.Schema({
    name: {type: String, minlength: 1,required: true},
    age: {type: Number, min: 1, max: 150, required: true},
   }, { versionKey: false })

   


   mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
   var User = mongoose.model('User') 


//___________________GET_ROUTES________________________________________________________________________________


    app.get('/', function(req,res){
        
        
            User.find({}, function(error, user){
               
                    res.render('index', {users: user});
                
            });
        });
   


//___________________POST_ROUTES________________________________________________________________________________



app.post('/reset', function(req,res){
    req.session.destroy();
    res.redirect('/');
})

app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function(err) {
      
      if(err) {
        console.log('something went wrong');
        res.redirect('/');
        res.send(err);
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        res.redirect('/');
      }
    })
  })


    
//_____________________________________LISTEN __________________________________________________________________

app.listen(8000, function() {
 console.log("listening on port 8000");
});