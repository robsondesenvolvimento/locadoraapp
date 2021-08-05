var mysql = require('mysql2');
const configuration = require('../config/configuration');

 module.exports = () => {

    connection = mysql.createConnection({
        host: configuration.mysql.host,
        port: configuration.mysql.port,
        user: configuration.mysql.user,
        password: configuration.mysql.password,
        database: configuration.mysql.database,
        insecureAuth : configuration.mysql.insecureAuth
    });

    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
    });

    return connection;
}