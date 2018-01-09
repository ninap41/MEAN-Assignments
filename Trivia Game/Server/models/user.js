var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 2 },
  lastName: { type: String, required: true, minlength: 2 },
  email: { type: String, required: true, minlength: 2, unique: true },
  password: { type: String, required: true, minlength: 8 },
  confirmpassword: { type: String, required: true},
  TheirProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  Score: { type: Number}
});


var User = mongoose.model('User', UserSchema);
