import React, { Component } from 'react';
import logo from './logo.svg';
import pic from './pic.jpg'
import './App.css';

class App extends Component {
  render() {
    const info = ["School: Harvard College", "Concentration: Undecided", "Age: 18.16"]
    const infoitems = info.map((info) => <li>{info}</li>)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Angela Deng</h1>
        </header>
        <div className="Bio">
          <div className="Bio-info">
            <h1 className="Bio-title">About Me:</h1>
            <ul>{infoitems}</ul>
          </div>
          <img src={pic} className="Bio-pic" alt=""/>
        </div>
      </div>
    );
  }
}

export default App;
