const Veiculo = require('../models/veiculo');
const Cliente = require('../models/cliente');
const Locadora = require('../models/locadora');
const Endereco = require('../models/endereco');

const veiculos = [];
veiculos.push(new Veiculo('Chevrollet', 'Cruze', 2017, 140000.0));
veiculos.push(new Veiculo('Chevrollet', 'Onix', 2017, 80000.0));
veiculos.push(new Veiculo('Fiat', 'Argo', 2019, 70000.0));
veiculos.push(new Veiculo('Ferrari', 'Ferrari California', 2015, 1000000.0));

const getEndereco = () => {
  const endereco = new Endereco(
    '80210-110',
    'Rua Paschoal Bordignon',
    '',
    'Jardim Botânico',
    'Curitiba',
    'PR',
    '4106902',
    '',
    '41',
    '7535'
  );
  return endereco;
};

const clientes = [];
clientes.push(
  new Cliente('Robson Candido dos Santos Alves', '1980-08-29', getEndereco())
);
clientes.push(
  new Cliente(
    'Henrique Casagrande dos Santos Alves',
    '2019-07-21',
    getEndereco()
  )
);
clientes.push(
  new Cliente('Ana Julia Casagrande da Silva', '1986-03-19', getEndereco())
);
clientes.push(
  new Cliente('Gabriel Casagrande de Lima', '1980-08-29', getEndereco())
);
clientes.push(new Cliente('Robson dos Santos', '1980-08-29', getEndereco()));
clientes.push(
  new Cliente('Robson Henrique Casagrande', '1980-08-29', getEndereco())
);

const locacoes = [];
locacoes.push(new Locadora(1, 1, '2021-05-01', 100.0));
locacoes.push(new Locadora(2, 4, '2021-06-01', 54.0));
locacoes.push(new Locadora(3, 2, '2021-07-01', 60.0));
locacoes.push(new Locadora(4, 3, '2021-04-01', 20.0));

module.exports = { veiculos, clientes, locacoes };
