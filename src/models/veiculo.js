class Veiculo {
  constructor(_marca, _modelo, _ano, _valor) {
    this._codigo = Veiculo.codigo = Veiculo.codigo ? (Veiculo.codigo += 1) : 1;
    Object.assign(this, { _marca, _modelo, _ano, _valor });
  }

  get codigo() {
    return this._codigo;
  }

  get marca() {
    return this._marca;
  }

  set marca(valor) {
    this._marca = valor;
  }

  get modelo() {
    return this._modelo;
  }

  set modelo(valor) {
    this._modelo = valor;
  }

  get ano() {
    return this._ano;
  }

  set ano(valor) {
    this._ano = valor;
  }

  get valor() {
    return this._valor;
  }

  set valor(valor) {
    this._valor = valor;
  }
}

module.exports = Veiculo;
