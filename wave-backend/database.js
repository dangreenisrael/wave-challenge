const testCreds = {
  driver: 'mysql',
  host: 'localhost',
  port: '3306',
  username: 'wave_test',
  password: 'pGNAExzhnbeZyEUw',
  database: 'wave_test',
  autoReconnect: true
};

const devCreds = {
  driver: 'mysql',
  host: 'localhost',
  port: '3306',
  username: 'wave',
  password: 'evwEBhzhBn4AZVwN',
  database: 'wave',
  autoReconnect: true
};

module.exports = process.env.NODE_ENV === 'test' ? testCreds : devCreds;
