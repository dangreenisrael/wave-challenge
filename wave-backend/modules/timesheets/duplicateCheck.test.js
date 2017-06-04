const duplicateCheck = require('./duplicateCheck');
const ReportHistory = require('../../models/ReportHistoryModel');

afterAll(() => {
  new ReportHistory();
  ReportHistory.destroyAll();
});

describe('Add report to history', () => {
  it('Should resolve checking a new record', () => {
    expect(duplicateCheck(15)).resolves.toBeDefined();
  });
  it('Should reject when checking a duplicate record', done => {
    new ReportHistory();
    ReportHistory.create({id: 15, body: 'Lorem ipsum'}, () => {
      expect(duplicateCheck(15)).rejects.toBe(409);
      done();
    });
  });
});
