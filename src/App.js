import React, { Component } from 'react';

import './App.css';
import Masthead from './Masthead';
import logo from './static/img/logo.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="custom-navbar">
            <div className="brand">
                <h1><img className="logo" alt="Charon Special Situations Group" src={logo}/>Charon SSG</h1>
            </div>
        </div>        
        <Masthead />
      </div>
    );
  }
}

export default App;
