const mysql = require('mysql2/promise');

const { DB_PASSWORD, DB_USER, DB_NAME, DB_HOST, DB_PORT } = process.env;

module.exports = async () => {
    const connection = await mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        database: DB_NAME,
        password: DB_PASSWORD,
        port: DB_PORT
    });
    return connection;
};