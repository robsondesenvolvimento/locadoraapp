const Locadora = require("../models/Locadora");
const { locacoes } = require("../utils/Actors");
const LocadoraViewModel = require('../views/LocadoraViewModel');

class LocadoraRepository {

    toViewModel(dados){
        return new LocadoraViewModel(
            dados.codigo, 
            dados.cliente, 
            dados.veiculo, 
            dados.dataLocacao, 
            dados.valorDiaria, 
            dados.valorFechamento);
    }

    getAll(){
        return locacoes.map(x => this.toViewModel(x))
    }

    getTotalLocacoes(){
        return locacoes.reduce(valor => valor.valorFechamento);
    }

}

module.exports = LocadoraRepository;