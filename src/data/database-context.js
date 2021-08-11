const mysql = require('mysql2');

const configuration = require('../config/configuration');

module.exports = () => {
  const connection = mysql.createConnection({
    host: configuration.mysql.host,
    port: configuration.mysql.port,
    user: configuration.mysql.user,
    password: configuration.mysql.password,
    database: configuration.mysql.database,
    insecureAuth: configuration.mysql.insecureAuth,
  });

  connection.connect((err) => {
    if (err) {
      console.error(`Erro de conexão com o MySQL  : ${err.stack}`);
    }
  });

  return connection;
};
