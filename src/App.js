import React, { Component } from 'react';
import Modal from 'react-modal';
import FontAwesome from 'react-fontawesome';
import logo from './logo.svg';
import pic from './pic.jpg';
import sweetswap from './sweetswap.jpg';
import sweetswap_desc from './sweetswap_desc.txt';
import proj1 from './projects.js';
import './App.css';

class AboutMe extends Component {
  render() {
    const info = ["School: Harvard College", "Concentration: Undecided", "Age: 18.16"]
    const infoitems = info.map((info) => <li>{info}</li>)
    return (
      <div className="Bio">
        <div className="Bio-info">
          <h1 className="Bio-title">About Me:</h1>
          <ul>{infoitems}</ul>
        </div>
        <img src={pic} className="Bio-pic" alt=""/>
      </div>
    );
  }
}

class ClosedTile extends Component {
  render () {
    return (
      <div className="Tile-closed">
        <h1> {this.props.name} </h1>
        <img src={this.props.pic} className="Closed-pic" alt=""/>
        <p> {this.props.desc} </p>
      </div>
    );
  }
}

class LanguageTag extends Component {
  render () {
    return (
      <div className="Lang-tag">
        {this.props.language}
      </div>
    )
  }
}

class OpenTile extends Component {
  render () {
    return (
      <div className="Tile-open">
        <h1 className="Open-title"> {this.props.name} </h1>
        <div className="Row">
        {this.props.langs.map((lang) => <LanguageTag language={lang}/>)}
        </div>
        <div className="Display-linebreak">
          {this.props.longdesc}
        </div>
        <button className="Project-link">
        <a href="https://devpost.com/software/sweetswap">
          Project on Devpost
        </a>
        </button>
      </div>
    );
  }
}

class Tile extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render () {
    return (
      <div>
        <button onClick={this.openModal}>
          <ClosedTile {...this.props} />
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Project Modal"
        >
          <OpenTile {...this.props} />
          <button className="Close-tile" onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}


class ProjectTiles extends Component {
  render () {
    return (
      <div className="Projects">
        <h1 className="Bio-title">Projects:</h1>
        <div className="Tiles">
          <Tile {...proj1}/>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Angela Deng</h1>
        </header>
        <AboutMe />
        <ProjectTiles />
      </div>
    );
  }
}

export default App;
