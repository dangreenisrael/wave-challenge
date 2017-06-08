/**
 *  Define Employee Model
 *  @param {Object} schema
 *  @return {Object}
 **/
const dbConfig = require('../database');
const caminte = require('caminte');
const Schema = caminte.Schema;
const schema = new Schema(dbConfig.driver, dbConfig);
const JobGroupModel = schema.define(
  'jobGroup',
  {
    jobGroupId: {type: schema.String, unique: true},
    rate: {type: schema.Number}
  },
  {
    primaryKeys: ['jobGroupId']
  }
);

module.exports = JobGroupModel;
