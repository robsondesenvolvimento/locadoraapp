const repositorioVeiculos = require('../repository/veiculo-repository')();

module.exports = () => {
  const veiculoController = {};

  /**
   * @swagger
   * paths:
   *   /veiculo:
   *     get:
   *       tags:
   *       - 'Veiculo'
   *       summary: 'Obter lista de veiculos.'
   *       description: 'Obter lista de veiculos.'
   *       produces:
   *       - 'application/json'
   *       responses:
   *         200:
   *           description: 'Obter lista de veiculos.'
   *           schema:
   *             $ref: '#/definitions/VeiculoViewModel'
   */
  veiculoController.getTodos = (req, res) => {
    repositorioVeiculos.listar((veiculos) => {
      res.status(200).json(veiculos);
    });
  };

  /**
   * @swagger
   * paths:
   *   /veiculo:
   *     post:
   *       tags:
   *       - 'Veiculo'
   *       summary: 'Insere um novo veículo.'
   *       description: 'TInsere um novo veículo.'
   *       produces:
   *       - 'application/json'
   *       parameters:
   *       - name: 'veiculo'
   *         in: 'body'
   *         description: 'Veiculo'
   *         require: true
   *         schema:
   *           $ref: '#/definitions/VeiculoViewModel'
   *       responses:
   *         200:
   *           description: 'Obtem o veículo inserido com o código.'
   *           schema:
   *             $ref: '#/definitions/VeiculoViewModel'
   *         204:
   *           description: 'Veículo não pode ser inserido.'
   */
  veiculoController.postInserir = async (req, res) => {
    repositorioVeiculos.post((veiculo) => {
      const defVeiculo = veiculo === undefined;
      // eslint-disable-next-line no-unused-expressions
      defVeiculo ? res.status(204).send() : res.status(201).json(veiculo);
    }, req.body);
  };

  /**
   * @swagger
   * definitions:
   *   VeiculoViewModel:
   *     type: 'object'
   *     properties:
   *       codigo:
   *         type: 'string'
   *         description: 'Nome do cliente'
   *       marca:
   *         type: 'string'
   *         description: 'Fabricante do veículo.'
   *       modelo:
   *         type: 'string'
   *         description: 'modelo do veículo'
   *       ano:
   *         type: 'string'
   *         description: 'Ano do veículo'
   *       valor:
   *         type: 'string'
   *         description: 'Valor do veículo'
   */

  return veiculoController;
};
