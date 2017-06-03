const addReportToHistory = require('./addReportToHistory');
const ReportHistory = require('../../models/ReportHistoryModel');

afterAll(() => {
  new ReportHistory();
  ReportHistory.destroyAll();
});

describe('Add report to history', () => {
  it('Should resolve after adding a report', () => {
    expect(addReportToHistory({id: 10, body: 'Lorem ipsum'})).resolves.toBeDefined();
  });
  it('Should reject a duplicate', () => {
    expect(addReportToHistory({id: 10, body: 'Lorem ipsum'})).rejects.toBeDefined();
  });
});
