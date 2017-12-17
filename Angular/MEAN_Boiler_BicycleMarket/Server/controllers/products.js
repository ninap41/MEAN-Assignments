var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
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
          res.json( 'there was an issue with your product creation')
        }
        else{
        var product = new Product(req.body);
        product.user_ = req.session.user
        product.postedBy = req.session.name
        product.contactemail = req.session.email
        product.save() 
        res.json({'product': product})
        // User.findOne({_id: req.session.user}, function(err, user){
        // User.update({_id: req.params.id}, {$push: {"TheirProducts": product}}, function(err){
        //         })
        //     })
        }
       
      },    
      

      delete: function(req,res) {
        Product.remove({_id:req.body._id}, function(err){ //body not params
            if (err){
                res.json({error: ''})
            } else {
                res.json({success: ''})
            }       
    });
},

random: function (req,res){
    Product.find({})
    .then((products) => { 
    let num = products.length;
    let random = Math.floor(Math.random() * num);
    res.json(products[random])
    })
    .catch((err) => { "could not get random product!" });
    
},

update: function(req,res,next) {
    editedProduct = new Product(req.body)
    Product.findByIdAndUpdate(editedProduct._id, editedProduct)
    .then( () => { res.json(true); }) /// stops it from being broken.

    .catch((err) => { res.status(503).json(err); })
    }
}