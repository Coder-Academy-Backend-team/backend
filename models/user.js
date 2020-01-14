const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const crypto = require('crypto');

require('dotenv').config();

const userSchema = new Schema({
  username: 
  {
    type: String,
    required: true,
    minlength: 3
  },
  password:
  {
    type: String,
    required: true
  },
  isAdmin: 
  {
    type: Boolean,
    required: true
  },
  email:
  {
    type: String,
    validate: {
      validator: function(v) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  }
},{
  collection: 'users'
});

userSchema.methods.setPassword = function(password) {
  this.password = crypto.pbkdf2Sync(password, process.env.SALT, 1000, 64, `sha512`).toString(`hex`);
}

userSchema.methods.validPassword = function(password) {
  const _password = crypto.pbkdf2Sync(password, process.env.SALT, 1000, 64, `sha512`).toString(`hex`);
  return this.password === _password;
}

const User = mongoose.model("User", userSchema);

module.exports = User;