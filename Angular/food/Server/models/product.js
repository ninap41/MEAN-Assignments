var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// **CHANGE THE FOLLOWING LINE BASED ON PROJECT
var ProductSchema = new mongoose.Schema({
    postedBy: { type: String },
    productname: { type: String,required: true, minlength: "4"},
    contactemail: { type: String},
    description: { type: String, required: true, minlength: "8"},
    price:{ type: Number, required: true},
    // img: { type: String },
    user_: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

mongoose.model('Product', ProductSchema);