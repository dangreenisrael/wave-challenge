const duplicateCheck = require('./duplicateCheck');
const ReportHistory = require('../../models/ReportHistoryModel');

afterAll(() => {
  new ReportHistory();
  ReportHistory.destroyAll();
});

describe('Add report to history', () => {
  it('Should resolve when adding a new record', () => {
    expect(duplicateCheck({id: 15, body: 'Lorem ipsum'})).resolves.toBeDefined();
  });
  it('Should reject when adding a duplicate record', () => {
    expect(duplicateCheck({id: 15, body: 'Lorem ipsum'})).rejects.toBe(409);
  });
});
