var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// **CHANGE THE FOLLOWING LINE BASED ON PROJECT
var ProductSchema = new mongoose.Schema({
    username: { type: String },
    score: { type: Number,required: true},
    percentage: { type: Number, required: true},
    user_: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

mongoose.model('Score', ScoreSchema);