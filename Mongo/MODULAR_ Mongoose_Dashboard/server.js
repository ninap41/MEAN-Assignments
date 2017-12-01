// require express
var express = require("express");//________________________________________________REQUIRE_________________
var path = require("path");
var session = require('express-session'); //added session goes here
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); //Here comes the goose REQUIRE IT

var app = express();

app.use(session({secret: 'keep it secret keep it safe'})); //________________________USE___________________
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './client/css')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

//_____________SCHEMAS_START__________________________________________________________________________________

require('./server/config/mongoose.js');

//___________________GET_ROUTES________________________________________________________________________________

   var routes_setter = require('./server/config/routes.js');
   routes_setter(app);

//___________________listen_______________________________________________________________________________

app.listen(8000, function() {
 console.log("listening on port 8000");
});