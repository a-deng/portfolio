import React, { Component } from 'react';
import ProjectTiles from './ProjectTiles.js';
import AboutMe from './AboutMe.js';
import Contact from './Contact.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Angela Deng</h1>
          </header>
        <AboutMe />
        <ProjectTiles />
        <Contact />
      </div>
    );
  }
}

export default App;
