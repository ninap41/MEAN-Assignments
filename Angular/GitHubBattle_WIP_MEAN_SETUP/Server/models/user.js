var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  username: { type: String, required: true},
  score: { type: Number, required: true},
  // 
  
});

mongoose.model('User', UserSchema);

var User = mongoose.model('User', UserSchema);
