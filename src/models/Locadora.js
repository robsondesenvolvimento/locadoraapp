class Locadora {
  constructor(_codigoCliente, _codigoVeiculo, _dataLocacao, _valorDiaria) {
    // eslint-disable-next-line no-multi-assign
    this._codigo = Locadora.codigo = Locadora.codigo
      ? (Locadora.codigo += 1)
      : 1;
    Object.assign(this, { _codigoCliente, _codigoVeiculo, _valorDiaria });
    this._dataLocacao = new Date(_dataLocacao);
    Object.freeze(this);
  }

  get codigo() {
    return this._codigo;
  }

  get cliente() {
    return this._codigoCliente;
  }

  get veiculo() {
    return this._codigoVeiculo;
  }

  get dataLocacao() {
    return new Date(this._dataLocacao);
  }

  get valorDiaria() {
    return this._valorDiaria.toFixed(2);
  }

  get valorFechamento() {
    const dataAtual = new Date().getTime();
    var oneDay = 24 * 60 * 60 * 1000;
    var diffDays = Math.abs((dataAtual - this._dataLocacao.getTime()) / oneDay);
    return Math.abs(diffDays * this._valorDiaria).toFixed(2);
  }
}

module.exports = Locadora;
