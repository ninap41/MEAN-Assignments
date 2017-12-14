var mongoose = require('mongoose');


var products = require('../controllers/products.js');
var Product = mongoose.model('Product');


module.exports = function(app) {


    app.get('/', function(req, res,err) {
            // res.render('index', {user: req.session.currUser, err: err });
            res.send('index route ago');
    });


    //PRODUCT STUFF
    app.get('/api/allProducts', function (req, res){
        products.find(req, res);
    });
 
    app.post('/api/addProduct', function (req, res){
        products.create(req, res);
    });

    app.post('/api/deleteProduct', function (req, res){
        products.delete(req, res);
    });

    ///END OF PRODUCT STUFF

    app.get('/success', function(req, res) {
        users.show(req, res);      
    });


}
