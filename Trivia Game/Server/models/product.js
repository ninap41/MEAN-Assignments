var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// **CHANGE THE FOLLOWING LINE BASED ON PROJECT
var ProductSchema = new mongoose.Schema({
    postedBy: { type: String },
    questionname: { type: String,required: true, minlength: "15"},
    fakeanswer1: { type: String, required: true},
    fakeanswer2: { type: String, required: true},
    answer: { type: String,required: true},
    questionstate: { type: Boolean},
    user_: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {timestamps: true});

mongoose.model('Product', ProductSchema);