const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String },
  email: { type: String },
  profilePic: { type: String },
  password: { type: String },
  eventsOrganised: [{ type: mongoose.Schema.ObjectId, ref: 'Event'}],
  eventsAttenting: [{ type: mongoose.Schema.ObjectId, ref: 'Event'}]
});

// throw a validation error when duplicate emails are created
// plugins can be required directly here
userSchema.plugin(require('mongoose-unique-validator'));

// 8 is the effort number
userSchema.pre('save', function hashPassword(next) {
  // isModified is a mongoose thing, 'this' refers to the model
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 8);
  }
  next();
});

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password); // this.password is the has that we've created on
};

module.exports = mongoose.model('User', userSchema);
