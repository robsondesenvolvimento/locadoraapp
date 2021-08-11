class LocadoraViewModel {
  constructor(
    codigo,
    codigoCliente,
    codigoVeiculo,
    dataLocacao,
    valorDiaria,
    valorFechamento
  ) {
    Object.assign(this, {
      codigo,
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
