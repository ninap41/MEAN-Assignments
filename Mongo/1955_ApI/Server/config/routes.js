var people = require('../controllers/people.js');

module.exports = function(app) {


    app.get('/', function(req, res) {
        people.show(req, res);
    })
  
    app.get('/new/:name', function(req,res){
            people.create(req, res)
    })
    
    app.get ('/delete/:name', function(req, res){
        people.delete(req, res, req.params.name)
    })

    app.get('/:name', function(req, res){
        people.show_single(req, res, req.params.name)
    })
}
