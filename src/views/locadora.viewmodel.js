class LocadoraViewModel {
  constructor(
    codigoCliente,
    codigoVeiculo,
    dataLocacao,
    valorDiaria,
    valorFechamento
  ) {
    Object.assign(this, {
      codigoCliente,
      codigoVeiculo,
      dataLocacao,
      valorDiaria,
      valorFechamento,
    });
    Object.freeze(this);
  }
}

module.exports = LocadoraViewModel;
