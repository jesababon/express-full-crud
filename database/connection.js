const pgp = require('pg-promise')();
const connection = {
  host: 'localhost',
  port: 5432,
  database: 'tasklist_db'  //should be tasklist_db
};
const db = pgp(connection);

module.exports = db;

console.log(db);
