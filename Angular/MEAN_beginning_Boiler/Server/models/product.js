var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// **CHANGE THE FOLLOWING LINE BASED ON PROJECT
var ProductSchema = new mongoose.Schema({
    productname: { type: String,required: true, minlength: "4"},
    description: { type: String, required: true, minlength: "8"},
    price: { type: Number},
    // img: { type: File },
    user_: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

mongoose.model('Product', ProductSchema);