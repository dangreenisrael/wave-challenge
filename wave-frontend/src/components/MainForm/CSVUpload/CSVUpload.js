import React, {Component} from 'react';
import fetcher from '../../../modules/fetcher/fetcher';
class CSVUpload extends Component {
  constructor(props) {
    super(props);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }
  handleFileUpload({target}) {
    const [file] = target.files;
    console.log(file);
    fetcher.post('/new', file).then(console.log).catch(console.log);
  }
  render() {
    return (
      <form action="." encType="multipart/form-data">
        <label className="pt-file-upload .modifier">
          <input type="file" onChange={this.handleFileUpload} />
          <span className="pt-file-upload-input">Choose file...</span>
        </label>
      </form>
    );
  }
}

export default CSVUpload;
