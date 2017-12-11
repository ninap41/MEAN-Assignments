var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BattleSchema = new mongoose.Schema({
  user1: { type: String, required: true},
  user2: { type: String, required: true},
  Winner: { type: String, required: true},
  
});

mongoose.model('Battle', BattleSchema);
var Battle = mongoose.model('Battle', BattleSchema);
