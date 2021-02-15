const mysql = require('mysql');

const connection = mysql.createConnection({
    user: 'student', 
    password: 'student',
    database: 'movieDatabase'
});

connection.connect((err) => {
    if (err) {
        console.log('is this where the error is?', err);
    } else {
        console.log('Connected to mysql :D');
    }
});

module.exports = connection;