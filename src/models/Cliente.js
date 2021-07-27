class Cliente {

    constructor(_nome,_anoNascimento,_cidade,_estado){
        this._codigo = Cliente.codigo = Cliente.codigo ? Cliente.codigo += 1 : 1;
        Object.assign(this, {_nome,_cidade,_estado});
        this._anoNascimento = new Date(_anoNascimento);        
        //Object.freeze(this);
    }

    

    get codigo(){
        return this._codigo;
    }

    get nome(){
        return this._nome;
    }
    set nome(valor){
        this._nome = valor;
    }

    get anoNascimento(){
        return new Date(this._anoNascimento);
    }
    set anoNascimento(valor){
        this._anoNascimento = new Date(valor);
    }    

    get cidade(){
        return this._cidade;
    }
    set cidade(valor){
        this._cidade = valor;
    }

    get estado(){
        return this._estado;
    }
    set estado(value){
        this._estado = value;
    }
}

module.exports = Cliente;