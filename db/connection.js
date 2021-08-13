const mysql = require('mysql2/promise');

async function getConnection() {
    const connection = await mysql.createConnection(
        {
            host: process.env.DB_HOST || 'localhost', 
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD ||  'password',
            database: process.env.DB_NAME || 'employeetracker_db'
        }
    );
    return connection;
}

module.exports = getConnection;
