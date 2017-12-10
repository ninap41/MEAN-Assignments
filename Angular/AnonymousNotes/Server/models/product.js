var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// **CHANGE THE FOLLOWING LINE BASED ON PROJECT
var ProductSchema = new mongoose.Schema({
    description: { type: String, required: true, minlength: "8"},
   },  { versionKey: false });

mongoose.model('Product', ProductSchema);