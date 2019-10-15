import React from 'react';
import Upload from './components/Upload';
import './css/pure-min.css';
import './css/side-menu.css';

function App() {
  return (
<div id="layout">
    <a href="#menu" id="menuLink" className="menu-link">
        <span></span>
    </a>

    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Financer</a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Upload</a></li>

                <li className="pure-menu-item menu-item-divided ">
                    <a href="#" className="pure-menu-link">Dashboard</a>
                </li>

            </ul>
        </div>
    </div>

    <div id="main">
        <div className="header">
            <h1>Upload de Gastos</h1>
        </div>

        <div className="content" id="content">
          <div className="pure-form pure-form-aligned">
            <Upload />
          </div>
        </div>
    </div>
</div>
  );
}

export default App;
