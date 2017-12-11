var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 2 },
  lastName: { type: String, required: true, minlength: 2 },
  email: { type: String, required: true, minlength: 2 },
  password: { type: String, required: true, minlength: 8 },
  confirmpassword: { type: String, required: true},
  
  product: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});


var User = mongoose.model('User', UserSchema);
