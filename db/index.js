const mysql = require('mysql');

const connection = mysql.createConnection({
    username: 'student', 
    password: 'student',
    database: 'movieDatabase'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to mysql :D');
    }
});

module.exports = connection;