const dbCredentials = require('./database');

describe('DB credentials', () => {
  it('Should give the test credentials in test mode', () => {
    expect(dbCredentials).toHaveProperty('database', ':memory:');
  });
});
