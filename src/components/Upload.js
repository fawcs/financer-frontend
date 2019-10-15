import React from 'react';
import Papa from 'papaparse';
import api from '../services/api';

class Upload extends React.Component {
  constructor() {
    super();
    this.state = {
      csvfile: undefined
    };
  };

  handleUpload = ev => {
    ev.preventDefault();

    const { csvfile } = this.state;

    Papa.parse(csvfile, {
      complete: this.handleUploadComplete,
      header: true
    });
  };

  handleUploadComplete = result => {
    Promise.all(result.data.map(entry => {

      let config = {headers: {'Content-Type': 'application/json'}};
      let data = {};

      data.description = entry.title;
      data.category = entry.category;
      data.date = entry.date;
      data.source = 'nubank';
      data.value = entry.amount;

      return api.post('expenses', data, config)

    }));
  };

  handleInputChange = ev => {
    console.log(ev);
    this.setState({
      csvfile: ev.target.files[0],
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={() => console.log('Upload')}>
          <div>
            <input
              ref={(input) => { this.file = input }}
              type="file"
              name="file"
              onChange={this.handleInputChange} />
          </div>
        </form>
        <button onClick={this.handleUpload}>Upload</button>
      </div>
    )
  }
}

export default Upload;