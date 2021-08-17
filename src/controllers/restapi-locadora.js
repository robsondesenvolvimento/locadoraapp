const repositorioLocadoras = require('../repository/locadora-repository')();

module.exports = () => {
  const locacaoController = {};

  /**
   * @swagger
   * paths:
   *   /locadora:
   *     get:
   *       tags:
   *       - 'Locadora'
   *       summary: 'Obter lista de locações.'
   *       description: 'Obter lista de locações.'
   *       produces:
   *       - 'application/json'
   *       responses:
   *         200:
   *           description: 'Obter lista de locações.'
   *           schema:
   *             $ref: '#/definitions/Locadora'
   */
  locacaoController.getTodos = (req, res) => {
    repositorioLocadoras.listar((locadoras) => {
      res.status(200).json(locadoras);
    });
  };

  /**
   * @swagger
   * definitions:
   *   Locadora:
   *     type: 'object'
   *     properties:
   *       codigo:
   *         type: number
   *         format: int32
   *         description: 'Código da locação'
   *       cliente:
   *         type: number
   *         format: int32
   *         description: 'Código do cliente'
   *       veiculo:
   *         type: number
   *         format: int32
   *         description: 'Código do veículo'
   *       dataLocacao:
   *         type: 'string'
   *         format: 'date-time'
   *         description: 'Data de locação do veículo.'
   *       valorDiaria:
   *         type: number
   *         format: double
   *         description: 'Valor da diaria de locação.'
   *       valorFechamento:
   *         type: number
   *         format: double
   *         description: 'Valor total dos dias de locação.'
   */

  return locacaoController;
};
