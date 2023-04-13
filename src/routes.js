const express = require('express');
const DigiCrudController = require('./controllers/DigiCrudController');
const HomeController = require('./controllers/HomeController');

const routes = express.Router();

routes.get('/', HomeController.home);
routes.post('/store', DigiCrudController.store);

module.exports = routes;