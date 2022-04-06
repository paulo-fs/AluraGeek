const { Router } = require('express');
const express = require('express');

const ProductController = require('./app/controllers/ProductController');

const routes = express.Router();

routes.get('/login', (request, response) => {
  response.send('login endpoint')
});

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;
