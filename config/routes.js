const express = require('express');
const Router = express.Router();
// const secureRoute = require('../lib/secureRoute');

// import controllers
const usersController = require('../controllers/usersController');
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

module.exports = Router;
