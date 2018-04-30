import React, { Component } from 'react';

export default class ClosedTile extends Component {
  render () {
    return (
      <div>
        <h1> {this.props.name} </h1>
        <img src={this.props.pic} className="Closed-pic" alt=""/>
        <p> {this.props.desc} </p>
      </div>
    );
  }
}