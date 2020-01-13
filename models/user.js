const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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

const User = mongoose.model("User", userSchema);

module.exports = User;