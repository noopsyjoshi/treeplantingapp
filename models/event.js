const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: { type: String },
  date: { type: String},
  startTime: { type: String},
  endTime: { type: String },
  location: {
    address: { type: String},
    postcode: { type: String}
  },
  image: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  attendees: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  comments: [{ name: String, content: String }],
  socialMedia: {
    linkedIn: String,
    instagram: String,
    twitter: String,
    facebook: String
  }
});

module.exports= mongoose.model('Event', eventSchema);
