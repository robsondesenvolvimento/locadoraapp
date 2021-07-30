const { Client } = require('pg');

const config = {
    host: '127.0.0.1',
    user: 'postgres',     
    password: '123456',
    database: 'dblocadora',
    port: 5432,
    ssl: false
};

const client = new Client(config);

module.exports = async () => {

    await client.connect();

    const controllerDatabase = {};    

    controllerDatabase.select = async (query) => {
        var dados = await client.query(query);
        return dados.rows;
    }

    return controllerDatabase;
}

// const config = {
//     host: '127.0.0.1',
//     // Do not hard code your username and password.
//     // Consider using Node environment variables.
//     user: 'postgres',     
//     password: '123456',
//     database: 'dblocadora',
//     port: 5432,
//     ssl: false
// };

// const client = new pg.Client(config);

// client.connect(err => {
//     if (err) throw err;
//     else {
//         queryDatabase();
//     }
// });

// function queryDatabase() {
//     const query = `
//         DROP TABLE IF EXISTS inventory;
//         CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);
//         INSERT INTO inventory (name, quantity) VALUES ('banana', 150);
//         INSERT INTO inventory (name, quantity) VALUES ('orange', 154);
//         INSERT INTO inventory (name, quantity) VALUES ('apple', 100);
//     `;

//     client
//         .query(query)
//         .then(() => {
//             console.log('Table created successfully!');
//             client.end(console.log('Closed client connection'));
//         })
//         .catch(err => console.log(err))
//         .then(() => {
//             console.log('Finished execution, exiting now');
//             process.exit();
//         });
// }