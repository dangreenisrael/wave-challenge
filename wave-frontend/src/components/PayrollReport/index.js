import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class PayrollReport extends Component {
  render() {
    const {data} = this.props;
    const options = {
      defaultSortName: 'employeeId', // default sort column name
      defaultSortOrder: 'acs' // default sort order,
    };
    return (
      <BootstrapTable ref="table" data={data} multiColumnSort={2} options={options}>
        <TableHeaderColumn isKey dataField="employeeId" dataSort>
          Employee Id
        </TableHeaderColumn>
        <TableHeaderColumn dataField="payPeriod" dataSort>Pay Period</TableHeaderColumn>
        <TableHeaderColumn dataField="totalPay" dataSort>Total Pay</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

PayrollReport.propTypes = {
  data: PropTypes.array.isRequired
};

export default PayrollReport;
