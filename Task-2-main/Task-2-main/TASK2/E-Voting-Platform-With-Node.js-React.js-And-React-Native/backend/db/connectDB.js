// const { Client } = require('pg');

// const client = new Client({
//     "user": "kkrvcyfx",
//     "password": "qwerty",
//     "host": "ruby.db.elephantsql.com",
//     "port": 5432,
//     "database": "pgres"
// });

// client.connect().then(() =>
// {
//     console.log("Server, You Have Successfully connected to PostgreSql");
// })
// .catch((error) =>
// {
//     console.log("Server, Unable to connect to PostgreSql");
// 	console.error(error);
// });

// module.exports = client;


const mysql = require('mysql2');

const client = mysql.createConnection({
  "host": "localhost",
  "user": "root",
  "password": "0403",
  "database": "fse"
});

client.connect((error) => {
  if (error) {
    console.log("Server, Unable to connect to MySQL");
    console.error(error);
  } else {
    console.log("Server, You Have Successfully connected to MySQL");
  }
});

module.exports = client;