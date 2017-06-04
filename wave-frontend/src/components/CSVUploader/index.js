import React, {Component} from 'react';
import fetcher from '../../modules/fetcher';
import style from './style';
import PropTypes from 'prop-types';

class CSVUpload extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {inputType: 'file'};
  }
  submit({target}) {
    const {reloadData} = this.props;
    const [file] = target.files;
    const data = new FormData();
    data.append('timesheet', file);
    fetcher
      .post('timesheets', data)
      .then(() => {
        reloadData();
      })
      .catch(error => {
        const {status} = error.response;
        if (status === 409) {
          this.setState({inputType: ''}); //Reset file input
          alert('You submitted a report that we have already processed');
          this.setState({inputType: 'file'}); //Reset file input
        }
      });
  }
  render() {
    const {inputType} = this.state;
    return (
      <label className="btn btn-primary btn-lg" style={style}>
        Choose a CSV
        <input type={inputType} style={{display: 'none'}} onChange={this.submit} accept=".csv" />
      </label>
    );
  }
}
CSVUpload.propTypes = {
  reloadData: PropTypes.func.isRequired
};

export default CSVUpload;
