const getTotalPayForTimePeriod = require('./getTotalPayForTimePeriodByEmployee');
const timeRecords = require('./__testData__/timeRecords');
const payrollReport = require('./__testData__/payrollReport');
describe('Process time records into pay periods', () => {
  it('Should properly process the time records', () => {
    expect(getTotalPayForTimePeriod(timeRecords)).toMatchObject(payrollReport);
  });
});
