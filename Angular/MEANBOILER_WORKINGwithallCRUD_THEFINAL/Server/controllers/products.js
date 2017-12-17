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
          res.json( {'err' : 'there was an issue with your product creation'})
        }
        else{
        var product = new Product(req.body);
        product.user_ = req.session.user
        product.postedBy = req.session.name
        product.save() 
        res.json({'product': product})
        // User.findOne({_id: req.session.user}, function(err, user){
        // User.update({_id: req.body.id}, {$push: {"TheirProducts": product}}, function(err){
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


getSingleProduct: function(req, res){
    Product.findOne({_id: req.body.id}, function (err, product){
        if (err){
            console.log("In findOne function, couldn't find thing");
        } else {
            console.log("success", product);
            res.json(product);
        }
    });
},

update: (req, res) => {
    console.log("~~~~~~~~MADE IT TO UPDATEBEFORE QUERY~~~~~~~~~~~~~~")
    console.log("~~~~~~~~~~~" + req.body + "~~~~~~~~~~~~")
    Product.findOneAndUpdate({ _id: req.body.productID }, { $set: { 
        productname: req.body.productname,
        description: req.body.description,
        price: req.body.price
    } }, { new: true }, function(err, data) {
        if( err ) {
            console.log("WENT WRONG~~~~~~~~~~~~~~")
            var error = "This doesnt work"
            console.log(err)
            console.log(data)
            return res.json( err );
        }
        else{
            console.log(data + " MADE TO DOC~~~~~~~~~~~~~~~~~~~~~~~")
            return res.json(data)
        }
    });
},




            

  


// update: (req, res) => {
//     Product.update({ _id: req.params._id }, req.body, function (err, updated_data) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             return res.json(updated_data)
//         }
//     });
    // Product.findOne({_id: _id}, function(err, singleproduct){
    //     if (err) {
    //         return res.json((err) => ({'err' : 'Error'}))
    //     }
    //     else{
    //     console.log(_id)
    //     console.log(req.params.id)
    //     productname = req.body.name,
    //     description = req.body.description,
    //     price = req.body.price
    //     }
    // })
    

        // var x
        // Product.findByIdAndUpdate(x._id, x)
        // .then(() => { res.json(true); })
        // .catch((err) => { res.status(503).json(err); }) //Not rendering 503 Page on redirect
        // console.log(err)
        // }
    
 
}