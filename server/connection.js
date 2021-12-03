const mysql = require('mysql2');
require('dotenv').config();

module.exports = mysql.createPool({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'mushroom_log',
  multipleStatements: true
}).promise();

