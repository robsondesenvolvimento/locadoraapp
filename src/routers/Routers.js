const routing = require('express').Router();
const clienteController = require('../controllers/RestApiCliente')();

routing.get('/cliente', clienteController.todos);
routing.get('/cliente/filtro', clienteController.filtroNome);
routing.get('/cliente/:id', clienteController.id);
routing.post('/cliente', clienteController.inserir);
routing.put('/cliente/:id', clienteController.atualizar);
routing.delete('/cliente/:id', clienteController.deletar);

module.exports = routing;