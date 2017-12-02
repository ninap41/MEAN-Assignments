var users = require('../controllers/users.js');

module.exports = function(app) {


    app.get('/', function(req, res,err) {
            res.render('index', {user: req.session.currUser, err: err });
    })
  
//     app.get('/error', function(req, res,err) {
//         res.render('error', { error: err });
// })

    app.post('/users', function(req,res,err){
            users.register(req, res)
    })

    app.get('/success', function(req, res) {
        users.show(req, res);
      
    })

    app.post('/login', function(req,res){
        users.login(req, res)
})

app.get('/logout', function(req,res){
    users.logout(req, res)
})
    
app.get('/delete/:id', function(req,res){
    users.delete(req, res)
})

}