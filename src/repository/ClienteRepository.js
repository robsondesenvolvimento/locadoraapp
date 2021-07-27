const Cliente = require("../models/Cliente");
let { clientes } = require("../utils/Actors");

class ClienteRepository {
    getAll(){
        return clientes;
    }

    getById(id){
        const indexCliente = clientes.findIndex(c => c.codigo == id);
        return clientes[indexCliente];
    }

    getByName(name){
        const regexp = new RegExp(`^${name.toUpperCase()}`, 'g');
        const cls = clientes.filter((x) => regexp.test(x.nome.toUpperCase()));
        return cls;
    }

    postClient(cliente){
        const cli = new Cliente(cliente.nome, cliente.anoNascimento, cliente.cidade, cliente.estado);
        clientes.push(cli);
        return clientes[clientes.length - 1]
    }

    putClient(id, body){
        const indexCliente = clientes.findIndex(x => x.codigo == id);
        if (indexCliente < 0) return undefined;

        clientes[indexCliente].nome = body.nome;
        clientes[indexCliente].anoNascimento = body.anoNascimento;
        clientes[indexCliente].cidade = body.cidade;
        clientes[indexCliente].estado = body.estado;
        return clientes[indexCliente];
    }

    deleteClient(id){
        const cls = clientes.filter(x => x.codigo != id);
        clientes = cls;
    }
}

module.exports = ClienteRepository;