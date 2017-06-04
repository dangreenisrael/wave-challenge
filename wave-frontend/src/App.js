import React, {Component} from 'react';
import './App.css';
import CSVUploader from './components/CSVUploader';
import PayrollReport from './components/PayrollReport';
import Header from './components/Header/index';
import fetcher from './modules/fetcher';

class App extends Component {
  constructor(props) {
    super(props);
    this.loadPayrollData = this.loadPayrollData.bind(this);
    this.state = {data: []};
  }
  componentDidMount() {
    this.loadPayrollData();
  }
  loadPayrollData() {
    fetcher.get('payroll-report').then(docs => {
      this.setState({data: docs.data});
    });
  }
  render() {
    return (
      <div className="main">
        <Header />
        <main className="container">
          <CSVUploader reloadData={this.loadPayrollData} />
          <PayrollReport data={this.state.data} />
        </main>
      </div>
    );
  }
}

export default App;
