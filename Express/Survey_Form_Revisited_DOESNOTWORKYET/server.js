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
    // socket.emit( 'my_emit_event');
    // socket.broadcast.emit( "my_broadcast_event");
    // io.emit( "my_full_broadcast_event");

    socket.on('Survey', function(msg){
        var data = msg
        console.log('test');
        console.log('message: ' + msg);
        socket.emit( 'updated_message' + {response: data});
        socket.emit( 'random_number' + {response: data});
        
      });

    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    // all the server socket code goes in here

socket.on( "button_clicked", function (data){
    console.log( 'Someone clicked a button!  Reason: '  + data.reason);
    socket.emit( 'server_response', {response:  "sockets are the best!"});
    socket.emit('server_response', {response: "sockets are the best!"})
    
    })


})