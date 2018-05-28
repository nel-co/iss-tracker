import React, { Component } from 'react';

export default class Location extends Component { 

  render() {
    return(
      <span>The iss is above <span className="location">{this.props.locationName}</span></span>
    );
  }
}