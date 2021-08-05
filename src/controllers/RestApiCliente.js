const axios = require('axios');


async function requestCep(cep){
  cep = cep.replace('-', '');
  return await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}

module.exports = () => {
  
  const ClienteRepository = require("../repository/ClienteRepository");
  const clienteRepository = new ClienteRepository();

  const repCli = require('../repository/Cliente.Repository')();

  const clienteController = {}

  /**
   * @swagger
   * paths:
   *   /cliente:
   *     get:
   *       tags:
   *       - "Cliente"
   *       summary: "Obter lista de clientes."
   *       description: "Obter lista de clientes."
   *       produces:
   *       - "application/json"
   *       responses:
   *         200:
   *           description: "Obter lista de clientes."
   *           schema: 
   *             $ref: "#/definitions/Cliente"
   */
  clienteController.getTodos = (req, res) => {
    repCli.listar((clients) => {
      res.status(200).json(clients);
    })
  };

  /**
   * @swagger
   * paths:
   *   /cliente/filtro:
   *     get:
   *       tags:
   *       - "Cliente"
   *       summary: "Traz uma lista filtrada pelo inicio do nome do cliente."
   *       description: "Traz uma lista filtrada pelo inicio do nome do cliente."
   *       produces:
   *       - "application/json"
   *       parameters:
   *       - name: "nome"
   *         in: "query"
   *         description: "Primeiro nome do usuário seguido do sobrenome(opcional)."
   *         require: true
   *         type: "string"
   *       responses:
   *         200:
   *           description: "Obter lista de clientes."
   *           schema:
   *             $ref: "#/definitions/Cliente"
   *         204:
   *           description: "Clientes não localizados."
   */
  clienteController.getFiltroNome = (req, res) => {
    repCli.nome((client) => {
      (client == undefined || client.length == 0) ? res.status(204).send() : res.status(200).json(client);
    }, req.query["nome"]);
  }

  /**
   * @swagger
   * paths:
   *   /cliente/{id}:
   *     get:
   *       tags:
   *       - "Cliente"
   *       summary: "Traz um cliente filtrado pelo seu ID."
   *       description: "Traz um cliente filtrado pelo seu ID."
   *       produces:
   *       - "application/json"
   *       parameters:
   *       - name: "id"
   *         in: "path"
   *         description: "Número de ID do cliente."
   *         require: true
   *         type: "integer"
   *       responses:
   *         200:
   *           description: "Obter lista de clientes."
   *           schema:
   *             $ref: "#/definitions/Cliente"
   *         204:
   *           description: "Clientes não localizados."
   */
  clienteController.getId = (req, res) => {
    var codigo = req.params.id;
    repCli.id((client) => {
      (client == undefined) ? res.status(204).send() : res.status(200).json(client);
    }, codigo);
  }

  /**
   * @swagger
   * paths:
   *   /cliente:
   *     post:
   *       tags:
   *       - "Cliente"
   *       summary: "Traz um cliente filtrado pelo seu ID."
   *       description: "Traz um cliente filtrado pelo seu ID."
   *       produces:
   *       - "application/json"
   *       parameters:
   *       - name: "cliente"
   *         in: "body"
   *         description: "Cliente"
   *         require: true
   *         schema:
   *           $ref: "#/definitions/ClienteViewModel"
   *       responses:
   *         200:
   *           description: "Obter lista de clientes."
   *           schema:
   *             $ref: "#/definitions/Cliente"
   *         204:
   *           description: "Clientes não localizados."
   */
  clienteController.postInserir = async (req, res) => {
    var endereco = await requestCep(req.body.cep)    
      .then(resp => resp.data);

    repCli.post((client) => {
      (client == undefined) ? res.status(204).send() : res.status(201).json(client);
    }, req.body, endereco);

    //const cli = clienteRepository.postClient(req.body, endereco);
    //res.status(201).json(cli);
  }

  /**
   * @swagger
   * paths:
   *   /cliente/{id}:
   *     put:
   *       tags:
   *       - "Cliente"
   *       summary: "Atualiza dados de um cliente pelo seu ID e dados no corpo da requisição."
   *       description: "Atualiza dados de um cliente pelo seu ID e dados no corpo da requisição."
   *       produces:
   *       - "application/json"
   *       parameters:
   *       - name: "id"
   *         in: "path"
   *         description: "Número de ID do cliente."
   *         require: true
   *         type: "integer"
   *       - name: "cliente"
   *         in: "body"
   *         description: "Cliente"
   *         require: true
   *         schema:
   *           $ref: "#/definitions/Cliente"
   *       responses:
   *         200:
   *           description: "Obter lista de clientes."
   *           schema: "array"
   *         204:
   *           description: "Clientes não localizados."
   */
  clienteController.putAtualizar = async (req, res) => {
    var endereco = await requestCep(req.body.cep)    
      .then(resp => resp.data);
    const cli = clienteRepository.putClient(req.params.id, req.body, endereco);
    (cli == undefined) ? res.status(204).send() : res.status(200).json(cli);
  }

  /**
   * @swagger
   * paths:
   *   /cliente/{id}:
   *     delete:
   *       tags:
   *       - "Cliente"
   *       summary: "Exclui um cliente da lista pelo seu ID."
   *       description: "Exclui um cliente da lista pelo seu ID."
   *       produces:
   *       - "application/json"
   *       parameters:
   *       - name: "id"
   *         in: "path"
   *         description: "Número de ID do cliente."
   *         require: true
   *         type: "integer"
   *       responses:
   *         204:
   *           description: "Clientes não localizados ou excluido com sucesso."
   */
  clienteController.deleteDeletar = (req, res) => {
    clienteRepository.deleteClient(req.params.id);
    res.status(204).send();
  }

  /**
   * @swagger
   * definitions:
   *   Cliente:
   *     type: "object"
   *     properties:
   *       nome:
   *         type: "string"
   *         description: "Nome do cliente"
   *       anoNascimento:
   *         type: "string"
   *         format: "date-time"
   *         description: "Data de nascimento do cliente."
   *       endereco:
   *         type: "object"
   *         properties:
   *           cep:
   *             type: "string"
   *           logradouro:
   *             type: "string"
   *           complemento:
   *             type: "string"
   *           bairro:
   *             type: "string"
   *           localidade:
   *             type: "string"
   *           uf:
   *             type: "string"
   *           ibge:
   *             type: "string"
   *           gia:
   *             type: "string"
   *           ddd:
   *             type: "string"
   *           siafi:
   *             type: "string"
   *   ClienteViewModel:
   *     type: "object"
   *     properties:
   *       nome:
   *         type: "string"
   *         description: "Nome do cliente"
   *       anoNascimento:
   *         type: "string"
   *         format: "date-time"
   *         description: "Data de nascimento do cliente."
   *       cep:
   *         type: "string"
   *         description: "CEP do endereço do cliente."
   */

  return clienteController;
}
