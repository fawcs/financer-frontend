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
    result.data.forEach(entry => {

      let config = {headers: {'Content-Type': 'application/json'}};
      let data = {};

      data.description = entry.title;
      data.category = entry.category;
      data.date = entry.date;
      data.source = 'nubank';
      data.value = entry.amount;

      api.post('expenses', data, config)
      .then( (res) => console.log(res) ,
             () => console.log('errrrouuuu')
      );

    });
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

export default Main;