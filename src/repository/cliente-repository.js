const conexao = require('../data/database-context')();
const ClienteViewModel = require('../views/cliente.viewmodel');
const EnderecoViewModel = require('../views/endereco.viewmodel');

module.exports = () => {
  const repository = {};

  function toViewModel(dados) {
    const cliente = new ClienteViewModel(
      dados.codigo,
      dados.nome,
      dados.anoNascimento,
      new EnderecoViewModel(
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
      )
    );

    return cliente;
  }

  repository.listar = (callback) => {
    const selectString = `
        select 
          c.*, e.* 
        from locadora.cliente c 
        inner join locadora.endereco e on c.endereco = e.cep`;

    conexao.query(selectString, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }

      if (rows !== undefined && rows.length > 0) {
        const lista = rows.map((x) => toViewModel(x));
        callback(lista);
      } else {
        callback(undefined);
      }
    });
  };

  repository.id = (callback, codigo) => {
    const selectString = `
        select 
          c.*, e.* 
        from locadora.cliente c 
        inner join locadora.endereco e on c.endereco = e.cep 
        where c.codigo = ${codigo}`;

    conexao.query(selectString, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      if (rows !== undefined && rows.length > 0) {
        const lista = toViewModel(rows[0]);
        callback(lista);
      } else {
        callback(undefined);
      }
    });
  };

  repository.nome = (callback, nome) => {
    const selectString = `
        select 
          c.*, e.* 
        from locadora.cliente c 
        inner join locadora.endereco e on c.endereco = e.cep 
        where c.nome REGEXP '^${nome}.*'`;

    conexao.query(selectString, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      const listaCli = rows.map((x) => toViewModel(x));
      callback(listaCli);
    });
  };

  repository.post = (callback, cliente, endereco) => {
    conexao.query(
      'INSERT INTO `endereco` SET ?',
      endereco,
      (error, results, fields) => {
        if (error) {
          console.log(error);
        }
      }
    );

    conexao.query(
      'INSERT INTO `cliente` SET ?',
      {
        nome: cliente.nome,
        ano_nascimento: cliente.anoNascimento,
        endereco: cliente.cep,
      },
      (error, results, fields) => {
        if (error) {
          console.log(error);
          return;
        }

        const id = results.insertId;

        const selectString = `
                select 
                c.*, e.* 
                from locadora.cliente c 
                inner join locadora.endereco e on c.endereco = e.cep 
                where c.codigo = ${id}`;

        conexao.query(selectString, (err, rows) => {
          if (err) {
            console.log(err);
            return;
          }
          const lista = rows.map((x) => toViewModel(x));
          callback(lista);
        });
      }
    );
  };

  repository.atualizar = (callback, idCli, cliente, endereco) => {
    conexao.query(
      'INSERT INTO `endereco` SET ?',
      endereco,
      (error, results, fields) => {
        if (error) {
          console.log(error);
          return;
        }
      }
    );

    conexao.query(
      'UPDATE `cliente` SET nome = ?, ano_nascimento = ?, endereco = ? WHERE codigo = ?',
      [cliente.nome, cliente.anoNascimento, cliente.cep, idCli],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          return;
        }

        const selectString = `
                select 
                c.*, e.* 
                from locadora.cliente c 
                inner join locadora.endereco e on c.endereco = e.cep 
                where c.codigo = ${idCli}`;

        conexao.query(selectString, (err, rows) => {
          if (err) {
            console.log(err);
            return;
          }
          const lista = rows.map((x) => toViewModel(x));
          callback(lista);
        });
      }
    );
  };

  repository.deletar = (idCli) => {
    conexao.query(
      'DELETE FROM `cliente` WHERE codigo = ?',
      [idCli],
      (error, results, fields) => {
        if (error) {
          console.log(error);
        }
      }
    );
  };

  return repository;
};
