const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const ProdutoController = require('./controllers/ProdutoController');

const routes = new express.Router();

// rotas

// =-=-=-=-= usuario =-=-=-=-=
// create
routes.post('/usuarios', UsuarioController.store);

// read
routes.get('/usuarios', UsuarioController.getAll);
routes.get('/usuarios/:id', UsuarioController.getOne);

// update
routes.put('/usuarios/:id', UsuarioController.update);

// delete
routes.delete('/usuarios/:id', UsuarioController.remove);

// =-=-=-=-= produto =-=-=-=-=
// create 
routes.post('/produtos', ProdutoController.store);

// read
routes.get('/produtos', ProdutoController.getAll);
routes.get('/produtos/:id', ProdutoController.getOne);

// update
routes.put('/produtos/:id', ProdutoController.update);

// delete
routes.delete('/produtos/:id', ProdutoController.remove);

module.exports = routes;
