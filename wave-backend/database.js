const path = require('path');
const dbPath = path.resolve(`${__dirname}`, 'dev.sqlite');

const devCreds = {
  driver: 'sqlite3',
  database: dbPath
};
const testCreds = {
  driver: 'sqlite3',
  database: ':memory:'
};

module.exports = process.env.NODE_ENV === 'test' ? testCreds : devCreds;

/*
If you prefer MySQL
 
 // const potentialProdCreds = {
 //   driver: 'mysql',
 //   host: 'localhost',
 //   port: '3306',
 //   username: 'wave',
 //   password: 'evwEBhzhBn4AZVwN',
 //   database: 'wave',
 //   autoReconnect: true
 // };
 */
