import React from 'react';
import { slide as Menu } from 'react-burger-menu';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  teste = e => {
    e.preventDefault();
  }
  render(props) {
    return (
      <Menu {...props}>
        <a className="bm-item" href="/" onClick={this.teste}>
          Home
        </a>
        <a className="bm-item" href="/upload" onClick={this.teste}>
          Upload
        </a>
        <a className="bm-item" href="/analysis">
          Análise de dados
        </a>
      </Menu>
    );
  } 
}

export default Sidebar;