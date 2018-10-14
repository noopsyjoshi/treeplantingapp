const express = require('express');
const Router = express.Router();
// const secureRoute = require('../lib/secureRoute');

// import controllers
const usersController = require('../controllers/usersController');
const eventsController = require('../controllers/eventsController');
const authController = require('../controllers/authController');

Router.route('/')
  .get(function(req, res) {
    res.send('Welcome to Express');
  });

// Login
Router.route('/login')
  .post(authController.login);

// Register
Router.route('/register')
  .post(authController.register);

// Users
Router.route('/users')
  .get(usersController.index)
  .post(usersController.create);

Router.route('/users/:id')
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);

// Events
Router.route('/events')
  .get(eventsController.index)
  .post(eventsController.create);

Router.route('/users/:id')
  .get(eventsController.show)
  .put(eventsController.update)
  .delete(eventsController.delete);

module.exports = Router;
