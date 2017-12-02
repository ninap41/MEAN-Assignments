var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
var mongodbErrorHandler = require('mongoose-mongodb-errors')


var UserSchema = new mongoose.Schema({
    first_name: {type: String, minlength: 1, required: true},
    last_name: {type: String, minlength: 1,  required: true},
    birthday: {type: Date, required: [true, 'Please Enter a Date']},
    email: {
        type: String, minlength: 1,  
        required: true, 
        unique: true,
        validate: {
            validator: function(v) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v)
              },
            message: '{VALUE} is not a valid !'
        },
    },
    password: {type: String, minlength: 8, maxlength: 32, required: true},
        // confirm_password: {type: String,  maxlength: 14, required: true},
   
}, {timestamp: true}, { versionKey: false });

UserSchema.pre('save', function(done){
    var hash = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
        this.password = hash;
        done();
        
});

UserSchema.post('save', function(err, doc, next) {
  
    // if (err.name === 'MongoError' && err.code === 11000) {
    //   next(new Error('There was a duplicate key error, boiiii'));
    // } else {
    //   next(err);
    // }
  });

var User = mongoose.model('User', UserSchema);
UserSchema.plugin(mongodbErrorHandler);

