import React from 'react';
import toJson from 'enzyme-to-json';
import moment from 'moment';
import {shallow} from 'enzyme';
import data from './__testData__/payrollReportData';
import PayrollReport, {getPayPeriodTimeStamp, sortByPayPeriod} from '.';

test('PayrollReport Renders Correctly', () => {
  const wrapper = shallow(<PayrollReport data={data} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('Pay period date is extracted correctly', () => {
  const startDate = '01-01-2016';
  const payPeriod = `${startDate} - 15-01-2016`;
  const startDateTimeStamp = moment(startDate, 'DD-MM-YYYY').unix();
  expect(getPayPeriodTimeStamp({payPeriod})).toEqual(startDateTimeStamp);
});

test('Pay period is sorting works', () => {
  const sorted = data.sort(sortByPayPeriod);
  const lastItem = sorted.shift();
  expect(lastItem).toMatchObject({
    employeeId: 4,
    payPeriod: '16/02/2015 - 28/02/2015',
    totalPay: 100
  });
});
