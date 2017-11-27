var express = require("express");
var app = express();


app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (req, res){
    res.render('index', {title: "my Express project"});
  });
  // route to process new user form data:
  app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
    
    res.redirect('/');
  })

app.get("/users/:id/:name", function (req, res){
    console.log("The user id requested is:", req.params.id, req.params.name);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id + req.params.name );
    // code to get user from db goes here, etc...
});

app.listen(8000, function() {
    console.log("listening on port 8000");
  })
//   console.log(response);
//   console.log(request);