const Employee = require('../EmployeeModel');
const JobGroup = require('../JobGroupModel');
const TimeRecord = require('../TimeRecordModel');
const {testEmployee, testJobGroup, testTimeRecord} = require('./testData');

const definedPropertiesMatch = (expected, received) => {
  Object.keys(expected).forEach(key => {
    expect(expected[key]).toBe(received[key]);
  });
};

const matchSerialized = describe('Models with relationships', () => {
  it('should create a new Employee', () => {
    new Employee();
    Employee.create(testEmployee, (err, doc) => {
      expect(err).toBeNull();
      definedPropertiesMatch(testEmployee, doc);
    });
  });
  it('should create a new JobGroup', () => {
    new JobGroup();
    JobGroup.create(testJobGroup, (err, doc) => {
      expect(err).toBeNull();
      definedPropertiesMatch(testJobGroup, doc);
    });
  });
  it('should create a new TimeRecord with an Employee and Job Type', done => {
    new TimeRecord();
    TimeRecord.create(testTimeRecord, (err, doc) => {
      Promise.all([doc.getEmployee(), doc.getJobGroup()]).then(([employee, jobGroup]) => {
        definedPropertiesMatch(testEmployee, employee);
        definedPropertiesMatch(testJobGroup, jobGroup);
        done();
      });
    });
  });
});
