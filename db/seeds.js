const mongoose = require('mongoose');

// Require models
const User = require('../models/user');
const Event = require('../models/event');

const { dbURI } = require('../config/environment');
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const userIds =[
  '5b9101d67c0224d96e11ed58', '5b9101e27c0224d96e11ed59', '5b9101ed7c0224d96e11ed5a', '5b9a368680963882534333bb'
];

const userData = [
  {
    _id: userIds[0],
    firstName: 'Melody',
    lastName: 'Jacob',
    username: 'melodyjacob',
    email: 'melodyjacob@email.com',
    profilePic: 'https://images.pexels.com/photos/1229177/pexels-photo-1229177.jpeg?cs=srgb&dl=blurred-background-close-up-colorful-1229177.jpg&fm=jpg',
    password: 'pass'
  },
  {
    _id: userIds[1],
    firstName: 'Natasha',
    lastName: 'Brown',
    username: 'natashabrown',
    email: 'natashabrown@email.com',
    profilePic: 'https://images.pexels.com/photos/1381558/pexels-photo-1381558.jpeg?cs=srgb&dl=adult-beautiful-big-city-1381558.jpg&fm=jpg',
    password: 'pass'
  },
  {
    _id: userIds[2],
    firstName: 'Noopur',
    lastName: 'Joshi',
    username: 'noopurjoshi',
    email: 'noopurjoshi@email.com',
    profilePic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/20120712_Mila_Kunis_%40_Comic-con_cropped.jpg/1280px-20120712_Mila_Kunis_%40_Comic-con_cropped.jpg',
    password: 'pass'
  }
];

const eventData = [
  {
    name: 'Tree plant Cassiobury Park',
    date: '13-10-2018',
    startTime: '09.00',
    endTime: '15.00',
    location: {
      address: 'Cassiobury Park, Watford',
      postcode: 'WD17 1BN'
    },
    createdBy: userIds[0],
    attendees: [ userIds[2] ],
    comments: []
  }];

User.collection.drop();
Event.collection.drop();

User.create(userData)
  .then(users => {
    console.log(`Created ${users.length} users`);
    eventData[0].createdBy = users[0]._id;
    return Event.create(eventData);
  })
  .then(events => console.log(`Created ${events.length} events`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
