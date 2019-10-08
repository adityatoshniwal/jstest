const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5494,
});

module.exports = {
  query: (text, params ) => pool.query(text, params),
}