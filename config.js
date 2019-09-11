const mysql = require('mysql');

//create connection to database

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'backend'
});

connection.connect(function(err) {
  err ? console.log(err) : console.log(connection);
});

module.exports = connection;
