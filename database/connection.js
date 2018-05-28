const pgp = require('pg-promise')();
const connection = {
  host: 'localhost',
  port: 5432,
  database: 'todo_app'
};

const db = pgp(connection);

console.log('connection on');

module.exports = db;