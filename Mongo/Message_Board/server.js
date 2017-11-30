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

mongoose.connect('mongodb://localhost/Message_Dash1');//____________________________GOOSE___________________
mongoose.Promise = global.Promise;
//_____________SCHEMAS_START__________________________________________________________________________________


   var Schema = mongoose.Schema;

   var MessageSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1},
    content: {type: String, required: true },
    _comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
},{ versionKey: false });

var CommentSchema = new mongoose.Schema({
  _message: {type: Schema.Types.ObjectId, ref: 'Message'},
  poster: { type: String, required: true, minlength: 1},
  text: { type: String, required: true},
},{ versionKey: false });

   mongoose.model('Message', MessageSchema);
   mongoose.model('Comment', CommentSchema);

   var Message = mongoose.model('Message') 
   var Comment = mongoose.model('Comment');



//___________________GET_ROUTES________________________________________________________________________________


  app.get('/', function (req, res){
    Message.find().populate('_comments').exec(function(err, message) {
            if(err){
              console.log('rendering page errors');
            }
            else {
              console.log('messages should append');
              res.render('index', {messages: message});
            }
            console.log("passed render route");
               
            });
        
              
        });

  app.post('/Create_Comment/:id', function (req, res){
    Message.findOne({_id: req.params.id}, function(err, message){
        var comment = new Comment({poster: req.body.poster, text: req.body.text, _message : req.params.id});
        // comment._message = req.params.id;
        Message.update({_id: req.params.id}, {$push: {"_comments": comment}}, function(err){
          });
        comment.save(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect('/');
            }
        });
      });
    });
 



//___________________POST_ROUTES________________________________________________________________________________




  app.post('/Create_Message', function (req, res) {
    console.log("POST DATA", req.body);    
    var message = new Message();
    message.name = req.body.name;
    message.content = req.body.content;
  
    message.save(function(err) {
        if(err) {
            console.log(err)
            res.redirect('/');
        } else {
            console.log("no errors")
            res.redirect('/');
        }
    })
    console.log("outside save")
});

  app.post('/destroymessage/:id', function(req,res){
    Message.remove({_id:req.params.id}, function(err){
        res.redirect('/');
      });
  
  });
    
//_____________________________________LISTEN __________________________________________________________________

app.listen(8000, function() {
 console.log("listening on port 8000");
});