import React from 'react';
import renderer from 'react-test-renderer';
import CSVUploader from '.';
import {shallow} from 'enzyme';

test('CSVUploader Renders Correctly', () => {
  const reloadData = jest.fn();
  const tree = renderer.create(<CSVUploader reloadData={reloadData} />).toJSON();
  expect(tree).toMatchSnapshot();
});

/*
 Note: The calls to the mock will go in this order:
 200
 400
 409
 500
 */

test('Handles a successful file upload', done => {
  global.alert = jest.fn();
  const reloadData = jest.fn();
  const wrapper = shallow(<CSVUploader reloadData={reloadData} />);
  const f = new File(['hello'], 'filename');
  wrapper.instance().submit({
    target: {files: [f]}
  });

  wrapper.instance().submit({
    target: {files: [f]}
  });

  wrapper.instance().submit({
    target: {files: [f]}
  });

  wrapper.instance().submit({
    target: {files: [f]}
  });

  setTimeout(
    () => {
      const [[e400], [e409], [e500]] = global.alert.mock.calls;
      expect(global.alert).toHaveBeenCalledTimes(3);
      expect(e400).toBe("You submitted a file that isn't a CSV");
      expect(e409).toBe('You submitted a report that we have already processed');
      expect(e500).toBe('Whoops, There seems to be a problem with our server');
      done();
    },
    1000
  );
});
