class VeiculoViewModel {

    constructor(codigo, marca,modelo,ano,valor){
        Object.assign(this, {codigo, marca,modelo,ano,valor});
        Object.freeze(this);
    }
}

module.exports = VeiculoViewModel;