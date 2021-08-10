const { locacoes } = require('../utils/actors');
const LocadoraViewModel = require('../views/locadora.viewmodel');

class LocadoraRepository {
  // eslint-disable-next-line class-methods-use-this
  toViewModel(dados) {
    return new LocadoraViewModel(
      dados.codigo,
      dados.cliente,
      dados.veiculo,
      dados.dataLocacao,
      dados.valorDiaria,
      dados.valorFechamento,
    );
  }

  getAll() {
    return locacoes.map((x) => this.toViewModel(x));
  }

  getTotalLocacoes() {
    const total = this.locacoes.reduce((valor) => valor.valorFechamento);
    return total;
  }
}

module.exports = LocadoraRepository;
