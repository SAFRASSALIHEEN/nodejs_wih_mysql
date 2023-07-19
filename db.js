//
// const {createPool} = require('mysql');

// const pool = createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "test",
//     connectionLimit: 10
// })

//sadalinda(conn example)
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});

module.exports = connection;