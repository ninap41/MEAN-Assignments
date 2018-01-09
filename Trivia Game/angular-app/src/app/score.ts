import { User } from './user';  


export class Score {
    constructor(
        public id: number = null,
        public user : string = '',
        public question1 : string = '',
        public question2 : string = '',
        public question3 : string = '',
        public finalscore: number = null,
        public percentage: number = null,    
    ) {}
}



// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// // **CHANGE THE FOLLOWING LINE BASED ON PROJECT
// var ScoreSchema = new mongoose.Schema({
//     username: { type: String },
//     Question1: { type: String, required: true},
//     Question2: { type: String, required: true},
//     Question3: { type: String, required: true},
//     Score: {type: String, required: true},
//     percentage: { type: Number, required: true},
//     user_: [{ type: Schema.Types.ObjectId, ref: 'User' }]
// });

// mongoose.model('Score', ScoreSchema);

// // **CHANGE THE FOLLOWING LINE BASED ON PROJECT
// var ScoreSchema = new mongoose.Schema({
//     username: { type: String },
//     score: {type: String, required: true},
//     percentage: { type: Number, required: true},
//     user_: [{ type: Schema.Types.ObjectId, ref: 'User' }]
// });

// mongoose.model('Score', ScoreSchema);