module.exports = () => {
  
  const ClienteRepository = require("../repository/ClienteRepository");
  const clienteRepository = new ClienteRepository();

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
  clienteController.todos = (req, res) => {
    res.status(200).json(clienteRepository.getAll());
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
  clienteController.filtroNome = (req, res) => {
    const cls = clienteRepository.getByName(req.query["nome"]);
    (cls == undefined || cls.length == 0) ? res.status(204).send() : res.status(200).json(cls);
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
  clienteController.id = (req, res) => {
    const cli = clienteRepository.getById(req.params.id);
    (cli == undefined) ? res.status(204).send() : res.status(200).json(cli);
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
   *           $ref: "#/definitions/Cliente"
   *       responses:
   *         200:
   *           description: "Obter lista de clientes."
   *           schema:
   *             $ref: "#/definitions/Cliente"
   *         204:
   *           description: "Clientes não localizados."
   */
  clienteController.inserir = (req, res) => {
    const cli = clienteRepository.postClient(req.body);
    res.status(201).json(cli);
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
  clienteController.atualizar = (req, res) => {
    const cli = clienteRepository.putClient(req.params.id, req.body);
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
  clienteController.deletar = (req, res) => {
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
   *       cidade:
   *         type: "string"
   *         description: "Cidade do cliente"
   *       estado:
   *         type: "string"
   *         description: "Estado do cliente"
   */

  return clienteController;
}
