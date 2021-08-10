class Cliente {
  constructor(_nome, _anoNascimento, _endereco) {
    this._codigo = Cliente.codigo = Cliente.codigo ? (Cliente.codigo += 1) : 1;
    this._anoNascimento = new Date(_anoNascimento);
    Object.assign(this, { _nome, _endereco });
  }

  get codigo() {
    // eslint-disable-next-line no-underscore-dangle
    return this._codigo;
  }

  get nome() {
    // eslint-disable-next-line no-underscore-dangle
    return this._nome;
  }

  set nome(valor) {
    // eslint-disable-next-line no-underscore-dangle
    this._nome = valor;
  }

  get anoNascimento() {
    // eslint-disable-next-line no-underscore-dangle
    return new Date(this._anoNascimento);
  }

  set anoNascimento(valor) {
    // eslint-disable-next-line no-underscore-dangle
    this._anoNascimento = new Date(valor);
  }

  get endereco() {
    // eslint-disable-next-line no-underscore-dangle
    return this._endereco;
  }

  set endereco(valor) {
    // eslint-disable-next-line no-underscore-dangle
    this._endereco = valor;
  }
}

module.exports = Cliente;
