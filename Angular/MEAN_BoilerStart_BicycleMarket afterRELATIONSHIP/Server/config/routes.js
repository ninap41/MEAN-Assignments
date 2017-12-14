var mongoose = require('mongoose');

var users = require('../controllers/users.js');
var User = mongoose.model('User');
var Product = mongoose.model('Product');
var products = require('../controllers/products.js');
var Product = mongoose.model('Product');


module.exports = function(app) {

    app.get('/', function(req, res,err) {
            res.render('index');
            res.send('index route ago');         
    })

    app.post('/api/register', function(req,res,err){
            users.register(req, res)
    })

    app.get('/api/allUsers', function (req, res){
        users.find(req, res);
    });
  
     app.get('/api/allUsers', function (req, res){
        users.find(req, res);
    });

    // PRODUCT STUFF    ///////////////////
    app.get('/api/allProducts', function (req, res){
        products.find(req, res);
    });
 
    app.get('/api/randomProduct', function (req, res){
        products.find(req, res);
    });

    app.post('/api/addProduct/:id', function (req, res){        //id should be users id
        products.create(req, res);
    });


    app.post('/api/deleteProduct', function (req, res){
        products.delete(req, res);
    });

    app.get('/api/updateProduct', function (req, res){   //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON
        products.update(req, res); //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON
    }); //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON

    ///END OF PRODUCT STUFF /////////////////


    app.get('/success', function(req, res) {
        users.show(req, res);      
    });

    app.post('/api/login', function(req,res){
        users.login(req, res)

})

app.get('/api/logout', function(req,res){
    users.logout(req, res)
    res.render()
}) 
app.get('/delete/:id', function(req,res){    //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON
    users.delete(req, res)   //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON
});   //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON





//ALL ALL ALL ALL ALL ALL//ALL ALL ALL ALL ALL ALL//ALL ALL ALL ALL ALL ALL//ALL ALL ALL ALL ALL ALL//ALL ALL ALL ALL ALL ALL//ALL ALL ALL ALL ALL ALL
   app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./angular-app/dist/index.html"))
});

}