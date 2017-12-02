// require express
var express = require("express");//________________________________________________REQUIRE_________________
var path = require("path");
var session = require('express-session'); //added session goes here
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); //Here comes the goose REQUIRE IT


var app = express();

app.use(session({secret: 'keep it secret keep it safe'})); //________________________USE___________________
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./css")));
// app.use(express.static(__dirname + '/css')); //USE YOUR DIR FOR STYLESHEET

app.set('views', path.join(__dirname, './views')); //________________________________SET____________________
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/Quoting_Dojo');//____________________________GOOSE___________________
mongoose.Promise = global.Promise;
//_____________SCHEMAS_START__________________________________________________________________________________

var QuoteSchema = new mongoose.Schema({
    name: {type: String, minlength: 1,required: true},
    quote: {type: String, min: 1, max: 100, required: true},
    
   }, {timestamps: true}, { versionKey: false })

   


   mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
   var Quote = mongoose.model('Quote') 


//___________________GET_ROUTES________________________________________________________________________________


    app.get('/', function(req,res){
  
        res.render('index');

        });

    app.get('/quotes', function(req,res){
    
    
        Quote.find({}, function(error, quotes){
          
                res.render('quotes', {quotes: quotes});
            
        });
    });   
   


//___________________POST_ROUTES________________________________________________________________________________



// app.post('/reset', function(req,res){
//     req.session.destroy();
//     res.redirect('/');
// })

app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);

    var quote = new Quote();
    quote.name = req.body.name;
    quote.quote = req.body.quote;

    quote.save(function(err) {
      
      if(err) {
        console.log('something went wrong making that quote');
        res.redirect('/');
        res.send(err);
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a quote!');
        res.redirect('/quotes');
      }
    })
  })


    
//_____________________________________LISTEN __________________________________________________________________

app.listen(8000, function() {
 console.log("listening on port 8000");
});