import React, { Component } from 'react';
import './ProjectTiles.css';

class LanguageTag extends Component {
  render () {
    return (
      <div className="Lang-tag">
        {this.props.language}
      </div>
    )
  }
}

export default class OpenTile extends Component {
  render () {
    return (
      <div className="Tile-open">
        <h1 className="Open-title"> {this.props.name} </h1>
        <div className="Open-tile-contents">
          <div className="Project-desc"> 
          <div className="Display-linebreak">
            {this.props.longdesc}
            <p>Find me on
          <button className="Project-link-button">
            <a href={this.props.link}>
            Devpost
            </a>
          </button>
          .
          </p>
          </div>
          </div>
          <div className="Column">
          <h2>Languages</h2>
          {this.props.langs.map((lang) => <LanguageTag language={lang}/>)}
          </div>
        </div>
      </div>
    );
  }
}