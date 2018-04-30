import React, { Component } from 'react';
import proj1 from './projects';
import './ProjectTiles.css';
import Tile from './Tile.js';

class ProjectTiles extends Component {
  render () {
    return (
      <div className="Projects">
        <h1 className="Projects-header">Projects</h1>
        <div className="Tiles">
          <Tile {...proj1}/>
          <Tile {...proj1}/>
          <Tile {...proj1}/>
        </div>
      </div>
    );
  }
}

export default ProjectTiles