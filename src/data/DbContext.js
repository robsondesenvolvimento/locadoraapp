var mysql = require('mysql2');

 module.exports = () => {

    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'locadora',
        insecureAuth : true
    });

    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
    });

    return connection;
}