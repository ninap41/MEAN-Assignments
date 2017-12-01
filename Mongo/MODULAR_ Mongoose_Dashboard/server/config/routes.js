var mongooses = require('../controllers/mongooses.js');


module.exports = function(app) {

    app.get('/', function(req, res) {
        mongooses.show(req, res)
})

    
    app.post('/createmongoose', function(req, res) {
        mongooses.create(req, res);
      })

    
      app.get('/New_Mongoose', function(req, res) {
        res.render('New_Mongoose');
      })

      app.get('/Edit_Mongoose/:id', function(req, res) {
        mongooses.edit(req, res);  
      
      })

      app.get('/Single_Mongoose/:id', function (req, res) {
        mongooses.show_single_mongoose(req, res);
    });

    
      app.post('/destroymongoose/:id', function(req,res){
       mongooses.destroy(req,res);
      })

      app.post('/Edit_Mongoose/edit/:id', function(req,res){
        mongooses.update(req,res);
       })
    }