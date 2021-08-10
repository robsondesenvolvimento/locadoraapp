const conexao = require('../data/DbContext')();
const VeiculoViewModel = require('../views/VeiculoViewModel');

module.exports = () => {

    const repository = {};

    function toViewModel(dados) {
        var veiculo = new VeiculoViewModel(dados.codigo, dados.marca, dados.modelo, dados.ano, dados.valor);
        return veiculo;
    }

    repository.post = (callback, veiculo) => {
        conexao.query("INSERT INTO `veiculo` SET ?", { marca: veiculo.marca, modelo: veiculo.modelo, ano: veiculo.ano, valor: veiculo.valor }, (error, results, fields) => {
            if (error) {
                console.log(error);
                return;
            }

            var id = results.insertId;

            let selectString = `
                select 
                * 
                from veiculo
                where codigo = ${id}`;

            conexao.query(selectString, function (err, rows) {
                if (err) {
                    console.log(err)
                    return;
                }
                var lista = rows.map((x) => toViewModel(x));
                return callback(lista)
            })
        });
    }

    return repository;
}