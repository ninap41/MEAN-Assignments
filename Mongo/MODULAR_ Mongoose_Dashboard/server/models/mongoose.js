var mongoose = require('mongoose');

var MongooseSchema = new mongoose.Schema({
    name: {type: String, minlength: 1,required: true},
    age: {type: Number, min: 1, max: 150, required: true},
    personality: {type: String, minlength: 1, required: true},
   }, { versionKey: false })

   var Mongoose = mongoose.model('Mongoose', MongooseSchema);
