const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'systarch',
    password: '',
    database: 'lab17',
    port:'3306'
});

module.exports = pool.promise();