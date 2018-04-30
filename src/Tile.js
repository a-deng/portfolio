import React, { Component } from 'react';
import Modal from 'react-modal';
import ClosedTile from './ClosedTile.js';
import OpenTile from './OpenTile.js';
import './ProjectTiles.css';

const modalstyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      width: '70%',
      maxwidth: '800px',
      minwidth: '200px',
      maxheight: '90%',
      bottom: 'auto',
      margin: 'auto',
      border: '5px solid black',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px',
      textalign: 'center'
    }
}

export default class Tile extends Component {
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
        <button onClick={this.openModal} className="Tile-closed">
          <ClosedTile {...this.props} />
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Project Modal"
          style={modalstyle}
        >
          <OpenTile {...this.props} />
          <button className="Close-tile-button" onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}