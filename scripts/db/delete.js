const mysql = require('mysql2');

require('dotenv').config();

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

const dbName = DB_NAME;

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
});

connection.connect(err => {
  if (err) throw err;
  connection.query(`DROP SCHEMA ${dbName}`, (err, result) => {
    if (err && err.code === 'ER_DB_DROP_EXISTS') {
      console.log('Already deleted');
      process.exit(0);
    }

    if (err) throw err;

    console.log('Deleted db');
    process.exit(0);
  });
});
