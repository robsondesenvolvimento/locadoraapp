const axios = require('axios');

module.exports = () => {

    const repositorioVeiculos = require('../repository/Veiculo.Repository')();
  
    const veiculoController = {};

    /**
     * @swagger
     * paths:
     *   /veiculo:
     *     post:
     *       tags:
     *       - "Veiculo"
     *       summary: "Insere um novo veículo."
     *       description: "TInsere um novo veículo."
     *       produces:
     *       - "application/json"
     *       parameters:
     *       - name: "veiculo"
     *         in: "body"
     *         description: "Veiculo"
     *         require: true
     *         schema:
     *           $ref: "#/definitions/VeiculoViewModel"
     *       responses:
     *         200:
     *           description: "Obtem o veículo inserido com o código."
     *           schema:
     *             $ref: "#/definitions/VeiculoViewModel"
     *         204:
     *           description: "Veículo não pode ser inserido."
     */
    veiculoController.postInserir = async (req, res) => {    
        repositorioVeiculos.post((veiculo) => {
          (veiculo == undefined) ? res.status(204).send() : res.status(201).json(veiculo);
        }, req.body);
      }

    /**
     * @swagger
     * definitions:   
     *   VeiculoViewModel:
     *     type: "object"
     *     properties:
     *       codigo:
     *         type: "string"
     *         description: "Nome do cliente"
     *       marca:
     *         type: "string"
     *         description: "Fabricante do veículo."
     *       modelo:
     *         type: "string"
     *         description: "modelo do veículo"
     *       ano:
     *         type: "string"
     *         description: "Ano do veículo"
     *       valor:
     *         type: "string"
     *         description: "Valor do veículo"
     */

    return veiculoController;
}