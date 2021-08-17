const repositorioRelatorios = require('../repository/rellocacao-repository')();

module.exports = () => {
    const controller = {};

    controller.getTotalFechamento = (req, res) => {
        repositorioRelatorios.getCustoTotalLocacao((total) => {
            res.status(200).json(total);
        })
    }

    return controller;
}