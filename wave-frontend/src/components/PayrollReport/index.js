import React, {Component} from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const getPayPeriodTimeStamp = ({payPeriod}) => {
  const [startDate] = payPeriod.split(' - ');
  return moment(startDate, 'DD-MM-YYYY').unix();
};

const sortByPayPeriod = (a, b, order) => {
  const A = getPayPeriodTimeStamp(a);
  const B = getPayPeriodTimeStamp(b);
  if (order === 'desc') {
    return B - A;
  } else {
    return A - B;
  }
};

class PayrollReport extends Component {
  render() {
    const {data} = this.props;
    const options = {
      defaultSortName: 'employeeId', // default sort column name
      defaultSortOrder: 'acs' // default sort order,
    };
    if (!data[0]) return <h3>Please upload a time report</h3>;
    return (
      <BootstrapTable ref="table" data={data} multiColumnSort={2} options={options}>
        <TableHeaderColumn isKey dataField="employeeId" dataSort>
          Employee Id
        </TableHeaderColumn>
        <TableHeaderColumn dataField="payPeriod" dataSort sortFunc={sortByPayPeriod}>
          Pay Period
        </TableHeaderColumn>
        <TableHeaderColumn dataField="totalPay" dataSort>
          Total Pay
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

PayrollReport.propTypes = {
  data: PropTypes.array.isRequired
};

export {PayrollReport as default, getPayPeriodTimeStamp, sortByPayPeriod}; // Exported for testability
