const conexao = require('../data/database-context')();
const LocadoraViewModel = require('../views/locadora.viewmodel');
const { dateDiffInDays } = require('../utils/datediff');

module.exports = () => {
  const repository = {};

  function toViewModel(dados) {
    const dias = dateDiffInDays(new Date(dados.data_locacao), new Date());
    const locadora = new LocadoraViewModel(
      dados.codigo_cliente,
      dados.codigo_veiculo,
      new Date(dados.data_locacao),
      dados.valor_diaria,
      (dias * dados.valor_diaria).toFixed(2)
    );
    return locadora;
  }

  repository.listar = (callback) => {
    const selectString = `
        select 
        *
        from locadora`;

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

  return repository;
};
