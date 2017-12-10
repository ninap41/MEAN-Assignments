var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// **CHANGE THE FOLLOWING LINE BASED ON PROJECT
var Product = mongoose.model('Product');
// var User = mongoose.model('user');


module.exports = {
    find: function(req, res){
        Product.find({}, function (err, products){
                res.json({'results': products})

        });
    },

    create: function(req, res, err) {
        if(err){
          res.json('there was an issue with your product creation')
        }
        else{
        var product = new Product(req.body);
        product.save() 
        res.json({'product': product})
        
        // this._dataService.currentUser(req.session.user);
        }
      },

      delete: function(req,res) {
        Product.remove({_id:req.body._id}, function(err){ //body not params
            if (err){
                res.json({error: ''})
            } else {
                res.json({good: ''})
            }       
    });
}
}