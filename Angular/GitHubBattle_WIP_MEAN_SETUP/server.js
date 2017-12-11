var express = require("express");
var path = require("path");
var session = require('express-session'); 
var tempData = require('tempData');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var app = express();

app.use(session({secret: 'keep it secret keep it safe'})); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, './angular-app/dist')));


// app.use(express.static(path.join(__dirname, './client/css')));
app.set('views', path.join(__dirname, './client/views'));

app.set('view engine', 'ejs');

app.use(cookieParser());

app.use(session({secret: 'keep it secret keep it safe'}));  
  

//_____________SCHEMAS_START__________________________________________________________________________________

require('./server/config/mongoose.js');

//___________________GET_ROUTES________________________________________________________________________________

var routes_setter = require('./server/config/routes.js');
routes_setter(app);
//___________________listen_______________________________________________________________________________

app.listen(8000, function() {
 console.log("listening on port 8000");
});