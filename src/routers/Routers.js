const routing = require('express').Router();
const clienteController = require('../controllers/RestApiCliente')();
const locadoraController = require('../controllers/RestApiLocadora')();

routing.get('/cliente', clienteController.getTodos);
routing.get('/cliente/filtro', clienteController.getFiltroNome);
routing.get('/cliente/:id', clienteController.getId);
routing.post('/cliente', clienteController.postInserir);
routing.put('/cliente/:id', clienteController.putAtualizar);
routing.delete('/cliente/:id', clienteController.deleteDeletar);

routing.get('/locadora', locadoraController.getTodos);

module.exports = routing;