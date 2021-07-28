const express = require("express");
const router = express.Router();
const ClienteRepository = require("../../repository/ClienteRepository");

const recurso = '/cliente';

const clienteRepository = new ClienteRepository();

router.get(recurso, (req, res) => {
  // #swagger.tags = ['Cliente']
  // #swagger.summary = 'Obter lista de clientes.'
  // #swagger.description = 'Obter lista de clientes.'
  res.status(200).json(clienteRepository.getAll());
});

router.get(`${recurso}/filtro`, (req, res) =>  {
  // #swagger.tags = ['Cliente']
  // #swagger.summary = 'Traz uma lista filtrada pelo inicio do nome do cliente.'
  // #swagger.description = 'Traz uma lista filtrada pelo inicio do nome do cliente.'
  /* #swagger.parameters['nome'] = {
               description: 'Inicio do nome do cliente.',
               type: 'string'
        } */
  const cls = clienteRepository.getByName(req.query["nome"]);
  (cls == undefined || cls.length == 0) ? res.status(204).send() : res.status(200).json(cls);
})

router.get(`${recurso}/:id`, (req, res) => {
  // #swagger.tags = ['Cliente']
  // #swagger.summary = 'Traz um cliente filtrado pelo seu ID.'
  // #swagger.description = 'Traz um cliente filtrado pelo seu ID.'
  // #swagger.parameters['id'] = { description: 'ID do cliente.' }
  const cli = clienteRepository.getById(req.params.id);
  (cli == undefined) ? res.status(204).send() : res.status(200).json(cli);
})

router.post(recurso, (req, res) => {
  // #swagger.tags = ['Cliente']
  // #swagger.summary = 'Inserir um novo cliente.'
  // #swagger.description = 'Insere um novo cliente.'
  const cli = clienteRepository.postClient(req.body);
  res.status(201).json(cli);
})

router.put(`${recurso}/:id`, (req, res) => {
  // #swagger.tags = ['Cliente']
  // #swagger.summary = 'Atualiza um cliente.'
  // #swagger.description = 'Atualiza um cliente.'
  // #swagger.parameters['id'] = { description: 'ID do cliente.' }
  const cli = clienteRepository.putClient(req.params.id, req.body);
  (cli == undefined) ? res.status(204).send() : res.status(200).json(cli);
})

router.delete(`${recurso}/:id`, (req, res) => {
  // #swagger.tags = ['Cliente']
  // #swagger.summary = 'Deleta um cliente.'
  // #swagger.description = 'Deleta um cliente.'
  // #swagger.parameters['id'] = { description: 'ID do cliente.' }
  clienteRepository.deleteClient(req.params.id);
  res.status(204).send();
})

module.exports = router;
