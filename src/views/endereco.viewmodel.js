class EnderecoViewModel {
  constructor(
    cep,
    logradouro,
    complemento,
    bairro,
    localidade,
    uf,
    ibge,
    gia,
    ddd,
    siafi
  ) {
    Object.assign(this, {
      cep,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf,
      ibge,
      gia,
      ddd,
      siafi,
    });
    Object.freeze(this);
  }
}

module.exports = EnderecoViewModel;
