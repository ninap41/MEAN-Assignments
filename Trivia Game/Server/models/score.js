var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// **CHANGE THE FOLLOWING LINE BASED ON PROJECT
var ScoreSchema = new mongoose.Schema({
    user: { type: String },
    question1: { type: String},
    question2: { type: String},
    question3: { type: String},
    finalscore: {type: Number},
    percentage: { type: Number},
    user_: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

mongoose.model('Score', ScoreSchema);