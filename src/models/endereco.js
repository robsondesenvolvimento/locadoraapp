class Endereco {
  constructor(
    _cep,
    _logradouro,
    _complemento,
    _bairro,
    _localidade,
    _uf,
    _ibge,
    _gia,
    _ddd,
    _siafi
  ) {
    Object.assign(this, {
      _cep,
      _logradouro,
      _complemento,
      _bairro,
      _localidade,
      _uf,
      _ibge,
      _gia,
      _ddd,
      _siafi,
    });
  }

  get cep() {
    return this._cep;
  }

  set cep(valor) {
    this._cep = valor;
  }

  get logradouro() {
    return this._logradouro;
  }

  set logradouro(valor) {
    this._logradouro = valor;
  }

  get complemento() {
    return this._complemento;
  }

  set complemento(valor) {
    this._complemento = valor;
  }

  get bairro() {
    return this._bairro;
  }

  set bairro(valor) {
    this._bairro = valor;
  }

  get localidade() {
    return this._localidade;
  }

  set localidade(valor) {
    this._localidade = valor;
  }

  get uf() {
    return this._uf;
  }

  set uf(valor) {
    this._uf = valor;
  }

  get ibge() {
    return this._ibge;
  }

  set ibge(valor) {
    this._ibge = valor;
  }

  get gia() {
    return this._gia;
  }

  set gia(valor) {
    this._gia = valor;
  }

  get ddd() {
    return this._ddd;
  }

  set ddd(valor) {
    this._ddd = valor;
  }

  get siafi() {
    return this._siafi;
  }

  set siafi(valor) {
    this._siafi = valor;
  }
}

module.exports = Endereco;
