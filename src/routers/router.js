const routing = require('express').Router();
const clienteController = require('../controllers/restapi-client')();
const locadoraController = require('../controllers/restapi-locadora')();
const veiculoController = require('../controllers/restapi-veiculo')();

routing.get('/cliente', clienteController.getTodos);
routing.get('/cliente/filtro', clienteController.getFiltroNome);
routing.get('/cliente/:id', clienteController.getId);
routing.post('/cliente', clienteController.postInserir);
routing.put('/cliente/:id', clienteController.putAtualizar);
routing.delete('/cliente/:id', clienteController.deleteDeletar);

routing.get('/locadora', locadoraController.getTodos);

routing.get('/veiculo', veiculoController.getTodos);
routing.post('/veiculo', veiculoController.postInserir);

module.exports = routing;
