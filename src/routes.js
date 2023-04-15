const express = require('express');
const DigiCrudController = require('./controllers/DigiCrudController');
const HomeController = require('./controllers/HomeController');
const ListaDigiController = require('./controllers/ListaDigiController');

const routes = express.Router();

routes.get('/', HomeController.home);


routes.post('/store', DigiCrudController.store);
routes.get('/detail', DigiCrudController.detail);
routes.get('/list', ListaDigiController.list);


module.exports = routes;