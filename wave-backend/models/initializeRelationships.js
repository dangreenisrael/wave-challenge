const EmployeeModel = require('./EmployeeModel');
const JobGroupModel = require('./JobGroupModel');
const TimeRecordModel = require('./TimeRecordModel');

module.exports = () => {
  EmployeeModel.hasMany(TimeRecordModel, {as: 'timeRecords', foreignKey: 'employeeId'});
  TimeRecordModel.belongsTo(EmployeeModel, {as: 'employee', foreignKey: 'employeeId'});
  TimeRecordModel.belongsTo(JobGroupModel, {as: 'jobGroup', foreignKey: 'jobGroupId'});
  JobGroupModel.hasMany(TimeRecordModel, {as: 'timeRecords', foreignKey: 'jobGroupId'});
};
