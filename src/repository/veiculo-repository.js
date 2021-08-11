const conexao = require('../data/database-context')();
const VeiculoViewModel = require('../views/veiculo.viewmodel');

module.exports = () => {
  const repository = {};

  function toViewModel(dados) {
    const veiculo = new VeiculoViewModel(
      dados.codigo,
      dados.marca,
      dados.modelo,
      dados.ano,
      dados.valor
    );
    return veiculo;
  }

  repository.listar = (callback) => {
    const selectString = `
        select 
          * 
        from veiculo`;

    conexao.query(selectString, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      if (rows !== undefined && rows.length > 0) {
        const lista = rows.map((x) => toViewModel(x));
        callback(lista);
      } else {
        callback(undefined);
      }
    });
  };

  repository.post = (callback, veiculo) => {
    conexao.query(
      'INSERT INTO `veiculo` SET ?',
      {
        marca: veiculo.marca,
        modelo: veiculo.modelo,
        ano: veiculo.ano,
        valor: veiculo.valor,
      },
      (error, results, fields) => {
        if (error) {
          console.log(error);
          return;
        }

        const id = results.insertId;

        const selectString = `
                select 
                * 
                from veiculo
                where codigo = ${id}`;

        conexao.query(selectString, (err, rows) => {
          if (err) {
            console.log(err);
            return;
          }
          const lista = rows.map((x) => toViewModel(x));
          callback(lista);
        });
      }
    );
  };

  return repository;
};
