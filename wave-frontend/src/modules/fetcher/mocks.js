import MockAdapter from 'axios-mock-adapter';
import payrollData from './__testData__/payrollReportData';
import timesheetResponse from './__testData__/timesheetResponse';

export default axios => {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axios);
  mock.onGet('/payroll-report').reply(200, payrollData);
  mock
    .onPost('/timesheets')
    .replyOnce(200, timesheetResponse)
    .onPost('/timesheets')
    .replyOnce(400)
    .onPost('/timesheets')
    .replyOnce(409)
    .onPost('/timesheets')
    .replyOnce(500);
};
