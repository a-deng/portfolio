import React, { Component } from 'react';
import './Contact.css'

class ContactMe extends Component {
  render() {
    if (this.props.show) {
      return (
        <div className="Method">
        {this.props.name}
        </div>
      );
    }
    return (
      <div> {" "} </div>
    );
  }
}

class Contactmethod extends Component {
	constructor() {
	    super();

	    this.state = {
	      show: false
      };
      this.stateChange=this.stateChange.bind(this);
  	}

    stateChange() {
        this.setState({ show: true });
    };
	render() {
		return (
		  <div className="Contact-method">
		  <button onClick={this.stateChange}>
		  {this.props.label}
		  </button>
	    <ContactMe name={this.props.method} show={this.state.show}/>
      </div>
		);
	}

}

const phone = {
	label: 'Call me.',
	method: 'Cell: (919)-637-2871'
}

const email = {
	label: 'Email me.',
	method: 'angela.deng.email@gmail.com'
}

export default class Contact extends Component {
  render() {
    return (
      <div className="Contact">
      <h1 className="Contact-title">Contact Me</h1>
        <div className="Contact-info">
        <Contactmethod {...phone}/>
        <Contactmethod {...email}/>
        </div>
      </div>
    );
  }
}