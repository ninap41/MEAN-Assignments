var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
var mongodbErrorHandler = require('mongoose-mongodb-errors')


var UserSchema = new mongoose.Schema({
    first_name: {type: String, minlength: 1, required: [true, "First Name Required"]},
    last_name: {type: String, minlength: [1,"Must be at least onecharacter"],  required: [true, "Last Name Required"]},
    birthday: {type: Date, required: [true, 'Please Enter a Date']},
    email: {
        type: String, minlength: 1,  
        required: true, 
        unique: true,
        validate: {
            validator: function(v) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
              },
            message: '{VALUE} is not a valid !'
        },
    },
    password: {type: String ,minlength: 8, maxlength: 32, required: true,
    validating: {
        validator: function( val ) {
          return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}/.test( val );
        },
        message: "Password failed validation, you must have at least 1 number, uppercase and special character"
      },
    
    },
},
{timestamp: true}, { versionKey: false });

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

