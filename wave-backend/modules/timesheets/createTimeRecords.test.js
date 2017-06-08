const createTimeRecords = require('./createTimeRecords');
const TimeRecord = require('../../models/TimeRecordModel');
const timeReportData = require('./__testData__/timeReportData');
const timeRecordsFinal = require('./__testData__/timeRecordsFinal');

afterAll(() => {
  new TimeRecord();
  TimeRecord.destroyAll();
});

describe('Add report to history', () => {
  it('Should resolve time records', done => {
    createTimeRecords(timeReportData).then(docs => {
      const massaged = docs.map(doc => {
        return {
          date: new Date(doc.date),
          hoursWorked: Number(doc.hoursWorked),
          employeeId: Number(doc.employeeId),
          jobGroup: String(doc.jobGroupId)
        };
      });
      expect(massaged).toMatchObject(timeRecordsFinal);
      done();
    });
  });
});
