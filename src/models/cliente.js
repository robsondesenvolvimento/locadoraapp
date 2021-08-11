class Cliente {
  constructor(_nome, _anoNascimento, _endereco) {
    this._codigo = Cliente.codigo = Cliente.codigo ? (Cliente.codigo += 1) : 1;
    this._anoNascimento = new Date(_anoNascimento);
    Object.assign(this, { _nome, _endereco });
  }

  get codigo() {
    return this._codigo;
  }

  get nome() {
    return this._nome;
  }

  set nome(valor) {
    this._nome = valor;
  }

  get anoNascimento() {
    return new Date(this._anoNascimento);
  }

  set anoNascimento(valor) {
    this._anoNascimento = new Date(valor);
  }

  get endereco() {
    return this._endereco;
  }

  set endereco(valor) {
    this._endereco = valor;
  }
}

module.exports = Cliente;
