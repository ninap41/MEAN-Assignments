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
    let name= req.body.name;
    let location= req.body.location;
    let language= req.body.language;
    let comment= req.body.comment;

    var results = {
        name: name,
        location: location,
        language: language,
        comment: comment,

    }
    
   //put in dictionary possibly
    res.render("results", {result:results});
})



//POST/REDIRECT ROUTES BEGIN ___________________________________________________________________________________







app.listen(8000, function() {
 console.log("listening on port 8000");
});