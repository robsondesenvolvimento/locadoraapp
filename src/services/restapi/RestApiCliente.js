const Cliente = require("../../models/Cliente");

const clienteRestApi = (app, recurso, dados) => {

  app.get(recurso, (req, res) => {
    res.status(200).json(dados);
  });

  app.get(`${recurso}/:id`, (req, res) => {
    const id = req.params.id;
    //const indexCliente = dados.findIndex(x => x.codigo == id);
    //(indexCliente < 0) ? res.status(204).send() : res.status(200).json(dados[indexCliente]);
    const cliente = dados.filter((x) => x.codigo == id);
    (cliente == undefined || cliente.length == 0) ? res.status(204).send() : res.status(200).json(cliente);
  });

  app.post(recurso, (req, res) => {
    const cliente = req.body;
    const cli = new Cliente(cliente.nome, cliente.anoNascimento, cliente.cidade, cliente.estado);
    dados.push(cli);
    res.status(201).json(dados[dados.length - 1]);
  });

  app.put(`${recurso}/:id`, (req, res) => {
    const id = req.params.id;
    const indexCliente = dados.findIndex(x => x.codigo == id);
    if (indexCliente < 0) res.status(204).send()

    const cliente = req.body;
    dados[indexCliente].nome = cliente.nome;
    dados[indexCliente].anoNascimento = cliente.anoNascimento;
    dados[indexCliente].cidade = cliente.cidade;
    dados[indexCliente].estado = cliente.estado;
    res.status(200).json(dados[indexCliente])
  });

  app.delete(`${recurso}/:id`, (req, res) => {
    const id = req.params.id;
    const indexCliente = dados.findIndex(x => x.codigo == id);
    if (indexCliente < 0) res.status(204).send();
    dados = dados.filter(x => x.codigo != id);
    res.status(204).send()
  });
};

module.exports = clienteRestApi;
