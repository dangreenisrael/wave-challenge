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
        this.setState({inputType: ''}); //Reset file input
        reloadData();
        this.setState({inputType: 'file'}); //Reset file input
      })
      .catch(error => {
        const {status} = error.response;
        this.setState({inputType: ''}); //Reset file input
        if (status === 409) {
          alert('You submitted a report that we have already processed');
        } else if (status === 400) {
          alert("You submitted a file that isn't a CSV");
        } else {
          alert('Whoops, There seems to be a problem with our server');
        }
        this.setState({inputType: 'file'}); //Reset file input
      });
  }
  render() {
    const {inputType} = this.state;
    return (
      <label className="btn btn-primary btn-lg" style={style}>
        Upload a Time Report (CSV)
        <input type={inputType} style={{display: 'none'}} onChange={this.submit} accept=".csv" />
      </label>
    );
  }
}
CSVUpload.propTypes = {
  reloadData: PropTypes.func.isRequired
};

export default CSVUpload;
