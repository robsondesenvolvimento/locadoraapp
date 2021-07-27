class Veiculo {

    constructor(_marca,_modelo,_ano,_valor){
        this._codigo = Veiculo.codigo = Veiculo.codigo ? Veiculo.codigo += 1 : 1;
        Object.assign(this, {_marca, _modelo, _ano,_valor});
        Object.freeze(this);
    }

    get codigo(){
        return this._codigo;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    get ano(){
        this._ano;
    }

    get valor(){
        return this._valor;
    }
}

module.exports = Veiculo;