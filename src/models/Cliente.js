class Cliente {

    constructor(_nome,_anoNasacimento,_cidade,_estado){
        this._codigo = Cliente.codigo = Cliente.codigo ? Cliente.codigo += 1 : 1;
        Object.assign(this, {_nome,_cidade,_estado});
        this._anoNasacimento = new Date(_anoNasacimento);        
        Object.freeze(this);
    }

    get codigo(){
        return this._codigo;
    }

    get nome(){
        return this._nome;
    }

    get anoNasacimento(){
        return new Date(this._anoNasacimento);
    }

    get cidade(){
        return this._cidade
    }

    get estado(){
        return this._estado;
    }
}

module.exports = Cliente;