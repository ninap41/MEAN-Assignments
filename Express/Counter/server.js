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
    if(!req.session.attempt){
        req.session.attempt =1;
        counter= req.session.attempt 
    }
    else {
        req.session.attempt +=1;
        counter= req.session.attempt;
    }
    console.log(counter);
    let count = counter
    // req.session.name = req.body.name;
    // console.log(req.session.name);
    res.render("index", {count: count});
})



//POST/REDIRECT ROUTES BEGIN ___________________________________________________________________________________

app.post('/reset', function(req,res){
    if(req.session.attempt >0){
        req.session.attempt =0;
        counter= req.session.attempt;
    }

    res.redirect('/',{counter : counter});
})


app.post('/Add_Two', function(req, res) {
    console.log("POST DATA", req.body);
    req.session.attempt +=2;
    res.redirect('/');
})


app.listen(8000, function() {
 console.log("listening on port 8000");
});