var mongoose = require('mongoose');

var users = require('../controllers/users.js');
var User = mongoose.model('User');


var Battle = mongoose.model('Battle');
var battles = require('../controllers/battles.js');

module.exports = function(app) {


    app.get('/', function(req, res,err) {
            // res.render('index', {user: req.session.currUser, err: err });
            res.send('index route ago');
            
    })

//     app.post('/api/register', function(req,res,err){
//             users.register(req, res)
//     })






//     //PRODUCT STUFF
//     app.get('/api/allBattles', function (req, res){
//         battles.find(req, res);
//     });
 
//     app.post('/api/createBattle', function (req, res){
//         battles.create(req, res);
//     });

//     app.post('/api/deleteProduct', function (req, res){
//         products.delete(req, res);
//     });

//     ///END OF PRODUCT STUFF





//     app.get('/success', function(req, res) {
//         users.show(req, res);      
//     });

// //     app.post('/login', function(req,res){
// //         users.login(req, res)
// // })

// // app.get('/logout', function(req,res){
// //     users.logout(req, res)
// // }) 
// app.get('/delete/:id', function(req,res){
//     users.delete(req, res)
// });


app.get('/api/users/profile',(req, res, next) => {
    console.log('profile route hit');
    res.json({ user: req.user });
});
   // Last catch-all route
   app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./angular-app/dist/index.html"))
});

}