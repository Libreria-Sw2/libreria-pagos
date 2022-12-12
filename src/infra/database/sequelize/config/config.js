require('dotenv').config();
const Sequelize = require('sequelize');

const { DB_USER, DB_PASS, DB_HOST, DB_NAME, NODE_ENV } = process.env;

const databaseCredentials = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'mysql',
  },
  test: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'mysql',
  },
  production: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'mysql',
  },
};

const { username, password, database, host, dialect } = databaseCredentials[
  NODE_ENV
];

console.log('credenciales: ', databaseCredentials[NODE_ENV]);

module.exports = databaseCredentials;

const mode = 'dev';

if (process.env.DB_CONNECTION_STRING) {
  console.log(`[DB]: Connecting to the database in prod mode.`);
  module.exports.connection = new Sequelize(process.env.DB_CONNECTION_STRING);
} else {
  console.log(`[DB]: Connecting to the database in ${mode} mode.`);
  module.exports.connection = new Sequelize(database, username, password, {
    host,
    dialect,
    port: 3306,
    dialectOptions: {
      multipleStatements: true,
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: true,
  });
}
