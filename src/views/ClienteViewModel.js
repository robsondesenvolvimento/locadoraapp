class ClienteViewModel {
    constructor(codigo, nome, anoNascimento, endereco){
        Object.assign(this, {codigo, nome, anoNascimento, endereco})
        Object.freeze(this);
    }
}

module.exports = ClienteViewModel;