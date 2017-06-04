import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import PayrollReport from '.';
import data from './__testData__/payrollReportData';

test('PayrollReport Renders Correctly', () => {
  const wrapper = shallow(<PayrollReport data={data} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
