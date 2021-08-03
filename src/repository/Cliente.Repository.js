const conexao = require('../data/DbContext')();
const ClienteViewModel = require('../views/ClienteViewModel');
const EnderecoViewModel = require('../views/EnderecoViewModel');

module.exports = () => {

    const repository = {}

    function toViewModel(dados){
        var cliente = new ClienteViewModel(dados.codigo, dados.nome, dados.anoNascimento, new EnderecoViewModel(
            dados.cep, 
            dados.logradouro, 
            dados.complemento, 
            dados.bairro, 
            dados.localidade, 
            dados.uf, 
            dados.ibge, 
            dados.gia, 
            dados.ddd, 
            dados.siafi
        ));

        return cliente;
    }

    repository.listar = (callback) => {
        let selectString = `
        select 
          c.*, e.* 
        from locadora.cliente c 
        inner join locadora.endereco e on c.endereco = e.cep`;

        conexao.query(selectString, function (err, rows) {
            if (err) {
                console.log(err)
                return;
            }          
            var lista = rows.map((x) => toViewModel(x));
            return callback(lista)
        })
    }

    repository.id = (callback, codigo) => {
        let selectString = `
        select 
          c.*, e.* 
        from locadora.cliente c 
        inner join locadora.endereco e on c.endereco = e.cep 
        where c.codigo = ${codigo}`;

        conexao.query(selectString, function (err, rows) {
            if (err) {
                console.log(err)
                return;
            }          
            var lista = toViewModel(rows[0]);
            return callback(lista)
        })
    }

    repository.nome = (callback, nome) => {
        let selectString = `
        select 
          c.*, e.* 
        from locadora.cliente c 
        inner join locadora.endereco e on c.endereco = e.cep 
        where c.nome REGEXP '^${nome}.*'`;

        conexao.query(selectString, function (err, rows) {
            if (err) {
                console.log(err)
                return;
            }          
            const listaCli = rows.map((x) => toViewModel(x));
            return callback(listaCli)
        })
    }

    repository.post = (cliente, endereco) => {
        conexao.query('insert into cliente SET ?)', { nome: cliente.nome, ano_nascimento: cliente.anoNascimento, endereco: cliente.endereco }, (error, results, fields) => {
            if(error) {
                console.log(error);
                return;
            }
            return cliente(results);
        });
    }

    return repository;
}