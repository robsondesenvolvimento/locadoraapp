const Cliente = require("../models/Cliente");
const ClienteViewModel = require('../views/ClienteViewModel');
const EnderecoViewModel = require('../views/EnderecoViewModel');
let { clientes } = require("../utils/Actors");

class ClienteRepository {

    toViewModel(dados){
        var cliente = new ClienteViewModel(dados.codigo, dados.nome, dados.anoNascimento, new EnderecoViewModel(
            dados.endereco.cep, 
            dados.endereco.logradouro, 
            dados.endereco.complemento, 
            dados.endereco.bairro, 
            dados.endereco.localidade, 
            dados.endereco.uf, 
            dados.endereco.ibge, 
            dados.endereco.gia, 
            dados.endereco.ddd, 
            dados.endereco.siafi
        ));

        return cliente;
    }

    getAll(){
        return clientes.map((x) => this.toViewModel(x));
    }

    getById(id){
        const indexCliente = clientes.findIndex(c => c.codigo == id);
        var cliente = this.toViewModel(clientes[indexCliente]);
        return cliente;
    }

    getByName(name){
        const regexp = new RegExp(`^${name.toUpperCase()}`, 'g');
        const cls = clientes.filter((x) => regexp.test(x.nome.toUpperCase()));
        const listaCli = cls.map((x) => this.toViewModel(x));
        return listaCli;
    }

    postClient(cliente, endereco){
        const cli = new Cliente(cliente.nome, cliente.anoNascimento, endereco);
        clientes.push(cli);
        return this.toViewModel(clientes[clientes.length - 1])
    }

    putClient(id, body, endereco){
        const indexCliente = clientes.findIndex(x => x.codigo == id);
        if (indexCliente < 0) return undefined;

        clientes[indexCliente].nome = body.nome;
        clientes[indexCliente].anoNascimento = body.anoNascimento;
        clientes[indexCliente].endereco = endereco;
        return this.toViewModel(clientes[clientes.length - 1])
    }

    deleteClient(id){
        const cls = clientes.filter(x => x.codigo != id);
        clientes = cls;
    }
}

module.exports = ClienteRepository;