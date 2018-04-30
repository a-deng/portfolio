import React, { Component } from 'react';
import me from './me.jpg';
import dev from './dev.PNG';
import cisco from './cisco.png';
import rsi from './rsi.png';
import './Bio.css';

export default class AboutMe extends Component {
  render() {
    return (
      <div className="Bio">
      <h1 className="Bio-title">About Me</h1>
      <img src={me} className="Bio-pic" alt=""/>
        <div className="Bio-info">
         I'm a rising sophomore at Harvard College, most likely studying mathematics and computer science. 
        </div>
        <div className="Divider"></div>
        <h1 className="Bio-subtitle">Education</h1>
        <div className="Edu-info">
          <p>Harvard College, Cambridge, MA (Class of 2021)</p>
          <p>North Carolina School of Science and Mathematics, Durham, NC (Class of 2017)</p>
        </div>
        <div className="Divider"></div>
        <h1 className="Bio-subtitle">Professional Experience</h1>
        <div className="Work-info">
          <div className="Work">
          <img src={dev} className="Work-pic" alt=""/>
          <div className="Work-desc">
            <p>Software Engineer at HSA DEV</p>
            <p>Summer 2018</p>
          </div>
          </div>
          <div className="Work">
          <img src={cisco} className="Work-pic" alt=""/>
          <div className="Work-desc">
            <p>Research Intern at Cisco Zeus</p>
            <p>Summer 2017</p>
          </div>
          </div>
          <div className="Work">
          <img src={rsi} className="Work-pic" alt=""/>
          <div className="Work-desc">
            <p>Researcher at Research Science Institute</p>
            <p>Summer 2016 </p>
          </div>
          </div>
        </div>
      </div>
    );
  }
}