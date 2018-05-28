import React, { Component } from 'react';
import './Bar.css';

import Location from './Location';

export default class Bar extends Component {

  componentDidMount = () => {
    const links = document.querySelectorAll('.bar-links span');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        this.props.toggleMainScreen(e);
      })    
    })
  }
  

  render() {
    return (
      <div className="bar">
        <Location locationName={this.props.locationName} />
        <div className="bar-links">
          <span className="bar-link__active">Live</span>
          <span>Map</span>
        </div>
      </div>
    );
  }
}