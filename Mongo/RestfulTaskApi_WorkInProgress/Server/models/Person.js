var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
    name: {type: String, minlength: 1,required: true},
   }, { versionKey: false })

var Person = mongoose.model('Person', PersonSchema);




