const Cliente = require("../../models/Cliente");
const ClienteRepository = require("../../repository/ClienteRepository");

const clienteRestApi = (app, recurso) => {

  const clienteRepository = new ClienteRepository();

  app.get(recurso, (req, res) => {
    res.status(200).json(clienteRepository.getAll());
  });

  app.get(`${recurso}/filtro`, (req, res) =>  {
    const cls = clienteRepository.getByName(req.query["nome"]);
    (cls == undefined || cls.length == 0) ? res.status(204).send() : res.status(200).json(cls);
  })

  app.get(`${recurso}/:id`, (req, res) => {
    const cli = clienteRepository.getById(req.params.id);
    (cli == undefined) ? res.status(204).send() : res.status(200).json(cli);
  })

  app.post(recurso, (req, res) => {
    const cli = clienteRepository.postClient(req.body);
    res.status(201).json(cli);
  })

  app.put(`${recurso}/:id`, (req, res) => {
    const cli = clienteRepository.putClient(req.params.id, req.body);
    (cli == undefined) ? res.status(204).send() : res.status(200).json(cli);
  })

  app.delete(`${recurso}/:id`, (req, res) => {
    clienteRepository.deleteClient(req.params.id);
    res.status(204).send();
  })
};

module.exports = clienteRestApi;
