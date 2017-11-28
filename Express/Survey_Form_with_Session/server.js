// require express
var express = require("express");
var path = require("path");
var session = require('express-session'); //added session goes here
var bodyParser = require('body-parser');


var app = express();

app.use(session({secret: 'keep it secret keep it safe'})); //use session
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));


app.set('views', path.join(__dirname, './views')); //set dependences
app.set('view engine', 'ejs');




//GET/RENDER ROUTES BEGIN ___________________________________________________________________________________

app.get('/', function(req, res) {
   
    res.render("index");
})
//POST/RENDER ROUTES??? BEGIN  ___________________________________________________________________________________


app.post('/results', function(req,res){
    req.session.name= req.body.name;
    req.session.location= req.body.location;
    req.session.language= req.body.language;
    req.session.comment= req.body.comment;

    var results = {
        name: req.session.name,
        location: req.session.location,
        language: req.session.language,
        comment: req.session.comment
    }
    res.render("results", {result:results});
})







//POST/REDIRECT ROUTES BEGIN ___________________________________________________________________________________
app.get('/back', function(req, res) {
    
    res.render("index", {name:req.session.name} );
})



app.get('/clear', function(req, res) {
    req.session.destroy();
    res.redirect('/');
})
//this will be if in session.







app.listen(8000, function() {
 console.log("listening on port 8000");
});