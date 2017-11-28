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
    
    var counter;
    if(!req.session.number){
        req.session.number = Math.floor(Math.random()* 100);
        req.session.string;
        counter= req.session.number 
    }
    else {
        req.session.number;
        counter= req.session.number;
    }
    let count = counter

    let stringy = ""

 
    res.render("index", {count: count, string: stringy});
})



//POST/REDIRECT ROUTES BEGIN ___________________________________________________________________________________

app.post('/reset', function(req,res){
    req.session.destroy();
    res.redirect('/');
})


app.post('/guess', function(req, res) {
    let stringy_update;
   
    console.log("GUESS", req.body);
    if(typeof req.body.guess === "string")
    {
        stringy_update="Erm, Try entering a number??";
    }
    if(req.body.guess == req.session.number){
        stringy_update="You Guessed It!";
        
    }
    if(req.body.guess < req.session.number){
        stringy_update="Try Higher!";
    }
    if(req.body.guess > req.session.number){
        stringy_update="Try Lower!";
    }   

    req.session.string = stringy_update;
    
    res.render('index', {count: req.session.number, string : req.session.string });
    
})


app.listen(8000, function() {
 console.log("listening on port 8000");
});