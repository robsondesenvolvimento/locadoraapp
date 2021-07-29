const Veiculo = require("../models/Veiculo");
let { veiculos } = require("../utils/Actors");

class VeiculoRepository {
    getAll(){
        return veiculos;
    }

    getById(id){
        const indexVeiculo = veiculos.findIndex(c => c.codigo == id);
        return veiculos[indexVeiculo];
    }

    getByModelo(model){
        const regexp = new RegExp(`^${model.toUpperCase()}`, 'g');
        const veics = veiculos.filter((x) => regexp.test(x.modelo.toUpperCase()));
        return veics;
    }

    postVeiculo(veiculo){
        const veic = new Veiculo(veiculo.marca, veiculo.modelo, veiculo.ano, veiculo.valor);
        veiculos.push(veic);
        return veiculos[veiculos.length - 1]
    }

    putVeiculo(id, body){
        const indexVeiculo = veiculos.findIndex(x => x.codigo == id);
        if (indexVeiculo < 0) return undefined;

        veiculos[indexVeiculo].marca = body.marca;
        veiculos[indexVeiculo].modelo = body.modelo;
        veiculos[indexVeiculo].ano = body.ano;
        veiculos[indexVeiculo].valor = body.valor;
        return veiculos[indexVeiculo];
    }

    deleteVeiculos(id){
        const veics = veiculos.filter(x => x.codigo != id);
        veiculos = veics;
    }
}

module.exports = VeiculoRepository;