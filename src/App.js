import React, { Component } from 'react';
import Modal from 'react-modal';
import logo from './logo.svg';
import pic from './pic.jpg'
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
        <h2> {this.props.subtitle} </h2>
        {this.props.desc}
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
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render () {
    return (
      <div>
        <button onClick={this.openModal}>
          <ClosedTile />
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
  }
}

class ProjectTiles extends Component {
  render () {
    return (
      <div className="Projects">
        <Tile />
        <Tile />
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
