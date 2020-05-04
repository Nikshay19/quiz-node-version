var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '699aV4KbozH2thhs',
    database: 'quiz'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;