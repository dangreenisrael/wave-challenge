const parseReportFromCSV = require('./parseReportFromCSV');
const timeReportCSV = require('./__testData__/timeReportCSV');
const timeReportData = require('./__testData__/timeReportData');
describe('Parse Report from CSV', () => {
  const {data, reportId} = parseReportFromCSV(timeReportCSV);
  it('should return an Id of 43', () => {
    expect(reportId).toBe(43);
  });
  it('should not have the headers in the first row', () => {
    expect(data[0][0]).not.toBe('date');
  });
  it('should have the correct data in the body', () => {
    expect(data).toMatchObject(timeReportData);
  });
});
