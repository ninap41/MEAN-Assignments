// require express
var express = require("express");
var path = require("path");
var session = require('express-session'); //added session goes here
// var bodyParser = require('body-parser');
//when using socket we dont need body parser;
var app = express();

app.use(session({secret: 'keep it secret keep it safe'})); //use session
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));


app.set('views', path.join(__dirname, './views')); //set dependences
app.set('view engine', 'ejs');




//GET/RENDER ROUTES BEGIN ___________________________________________________________________________________

app.get('/', function(req, res) {
   
    res.render("index");
})
//POST/RENDER ROUTES??? BEGIN  ___________________________________________________________________________________




//POST/REDIRECT ROUTES BEGIN ___________________________________________________________________________________




var server = app.listen(8000, function() {
    console.log("listening on port 8000");
   });
   var io = require('socket.io').listen(server);

        


    
    io.sockets.on('connection', function (socket) {

        console.log("Client/socket is connected!");
        console.log("Client/socket id is: ", socket.id);

        socket.on("clicked", function (data,number) {
            console.log('Someone clicked a button!' + JSON.stringify(data) );
            number = Math.floor(Math.random() * (1000 - 1+1)) + 1;
            socket.emit('server_response1', { response: "You emitted the following information to the server " + JSON.stringify(data)});
            socket.emit('server_response2', { response2: "<br/><br/>Your lucky number by the server is " + number });
            
    })


})