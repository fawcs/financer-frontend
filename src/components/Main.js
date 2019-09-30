import React from 'react';
import Papa from 'papaparse';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      csvfile: undefined
    };
  };

  handleUpload = ev => {
    const { csvfile } = this.state;

    Papa.parse(csvfile, {
      complete: this.handleUploadComplete,
      header: true
    });
  };

  handleUploadComplete = result => {
    result.data.forEach(entry => {

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