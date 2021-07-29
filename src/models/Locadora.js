class Locadora {

    constructor(_codigoCliente,_codigoVeiculo){
        this._codigo = Locadora.codigo = Locadora.codigo ? Locadora.codigo += 1 : 1;
        Object.assign(this, {_codigoCliente, _codigoVeiculo});
        this._dataLocacao = new Date(Date.now());
        //Object.freeze(this);
    }

    get codigo(){
        return this._codigo;
    }

    get cliente(){
        return this._codigoCliente;
    }

    get veiculo(){
        return this._codigoVeiculo;
    }

    get data(){
        return new Date(this._dataLocacao);
    }
}

module.exports = Locadora;