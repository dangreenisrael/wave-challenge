const formatPayPeriod = require('./formatPayPeriod');
const moment = require('moment');
// I'm using moment because of the clarity of its API
// (and to avoid issues of 0 vs 1 as the first month, day, etc)

describe('Format Pay Period', () => {
  it('Handles the first half of a month', () => {
    const date = moment('2017-01-04', 'YYYY-MM-DD').format(); // YYYY, MM, DD
    expect(formatPayPeriod(date)).toBe('01/01/2017 - 15/01/2017'); //DD/MM/YYYY - DD/MM/YY;
  });
  it('Handles the second half of a month', () => {
    const date = moment('2017-01-16', 'YYYY-MM-DD').format(); // YYYY, MM, DD
    expect(formatPayPeriod(date)).toBe('16/01/2017 - 31/01/2017'); //DD/MM/YYYY - DD/MM/YY;
  });

  it('Handles a leap year', () => {
    const date = moment('2016-02-24', 'YYYY-MM-DD').format(); // YYYY, MM, DD
    expect(formatPayPeriod(date)).toBe('16/02/2016 - 29/02/2016'); //DD/MM/YYYY - DD/MM/YY;
  });

  it('Handles a non leap year', () => {
    const date = moment('2017-02-24', 'YYYY-MM-DD').format(); // YYYY, MM, DD
    expect(formatPayPeriod(date)).toBe('16/02/2017 - 28/02/2017'); //DD/MM/YYYY - DD/MM/YY;
  });
});
