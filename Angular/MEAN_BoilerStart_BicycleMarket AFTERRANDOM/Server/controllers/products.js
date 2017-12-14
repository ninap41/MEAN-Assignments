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
        product.save() 
        res.json({'product': product})
        // User.findOne({_id: req.session.user}, function(err, user){
        // User.update({_id: req.params.id}, {$push: {"TheirProducts": product}}, function(err){
        //         })
        //     })
        }
       
      },
    // create: function(req, res, err) {
    //     if(err){
    //       res.json('there was an issue with your product creation')
    //     }
    //     else{
    //         User.findOne({_id: req.params.id}, function(err, user){
    //             var product = new Product({ postedBy: user.firstName, productname: req.body.productname,  description: req.body.description, price: req.body.price,user_ : req.params.id});
    //             product.user_ = req.params.id;
    //             User.update({_id: req.params.id}, {$push: {"product": product}}, function(err){
    //               });
    //             product.save()
    //             res.json({'product': product})
    //           })
    //     }
    //   },

        
      

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

update: function(req,res) {
    Product.update({_id:req.body._id}, function(err){ //body not params
        if (err){
            res.json({error: 'YOU FAIL'})
        } else {
            res.json({success: 'COOLBEANS YOU DID IT'})
        }       
    });
    }
}