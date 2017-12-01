var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
    name: {type: String, minlength: 1,required: true},
    quote: {type: String, min: 1, max: 100, required: true},
   }, { versionKey: false })

var Quote = mongoose.model('Quote', QuoteSchema);




