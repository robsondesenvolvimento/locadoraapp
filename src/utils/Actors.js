const Veiculo = require('../models/Veiculo');
const Cliente = require('../models/Cliente');
const Locadora = require('../models/Locadora');

let veiculos = new Array();
veiculos.push(new Veiculo("Chevrollet", 'Cruze', 2017, 140000.00));
veiculos.push(new Veiculo("Chevrollet", 'Onix', 2017, 80000.00));
veiculos.push(new Veiculo("Fiat", 'Argo', 2019, 70000.00));
veiculos.push(new Veiculo("Ferrari", 'Ferrari California', 2015, 1000000.00));

let clientes = new Array();
clientes.push(new Cliente('Robson Candido dos Santos Alves', '1980-08-29', 'Curitiba', 'PR'));
clientes.push(new Cliente('Henrique Casagrande dos Santos Alves', '2019-07-21', 'Curitiba', 'PR'));
clientes.push(new Cliente('Ana Julia Casagrande da Silva', '1986-03-19', 'Curitiba', 'PR'));
clientes.push(new Cliente('Gabriel Casagrande de Lima', '1980-08-29', 'Curitiba', 'PR'));

let locacoes = new Array();
locacoes.push(new Locadora(1, 1));
locacoes.push(new Locadora(2, 4));
locacoes.push(new Locadora(3, 2));
locacoes.push(new Locadora(4, 3));

module.exports = { veiculos, clientes, locacoes }