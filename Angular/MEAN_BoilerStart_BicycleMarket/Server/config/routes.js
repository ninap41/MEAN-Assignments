var mongoose = require('mongoose');

var users = require('../controllers/users.js');
var User = mongoose.model('User');
var Product = mongoose.model('Product');
var products = require('../controllers/products.js');
var Product = mongoose.model('Product');


module.exports = function(app) {


    app.get('/', function(req, res,err) {
            // res.render('index', {user: req.session.currUser, err: err });
            res.send('index route ago');
            
    })

    app.post('/api/register', function(req,res,err){
            users.register(req, res)
    })






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

    app.get('/api/updateProduct', function (req, res){
        products.update(req, res);
    });

    ///END OF PRODUCT STUFF





    app.get('/success', function(req, res) {
        users.show(req, res);      
    });

//     app.post('/login', function(req,res){
//         users.login(req, res)
// })

// app.get('/logout', function(req,res){
//     users.logout(req, res)
// }) 
app.get('/delete/:id', function(req,res){
    users.delete(req, res)
});


// app.get('/api/users/profile', passport.authenticate('jwt', { session : false }),(req, res, next) => {
//     console.log('profile route hit');
//     res.json({ user: req.user });
// });
   // Last catch-all route
   app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./angular-app/dist/index.html"))
});

}