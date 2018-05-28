import React, { Component, Fragment } from 'react';
import Bar from './Bar/Bar';
import Main from './Main/Main';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showingLiveFeed: true,
      showingMap: false,
      issData: {},
      locationName: 'You!'
    }
    this.mapTimer;
  }

  componentDidMount = () => {
    this.getIssCoords();
  } 

  getIssCoords = () => {
    fetch("https://api.wheretheiss.at/v1/satellites/25544").then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        issData: data
      })
    }).then(() => {
      this.getLocationName();
    });
  }

  getLocationName = () => {
    const { latitude, longitude } = this.state.issData;
    let location;
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.error) {
          location = 'water';
        } else {
          location = data.address.state;
        }
        this.setState({
          locationName: location
        })
      })
  }

  toggleMainScreen = (e) => {
    const links = document.querySelectorAll('.bar-links span');
    if(e.target.innerText === 'LIVE' && !e.target.classList.contains('bar-link__active')) {
      e.target.classList.toggle('bar-link__active');
      links[1].classList.remove('bar-link__active');
      this.setState({
        showingLiveFeed: true,
        showingMap: false
      });
      this.stopMapTracking();
    } else if(e.target.innerText === 'MAP' && !e.target.classList.contains('bar-link__active')) {
      e.target.classList.toggle('bar-link__active');
      links[0].classList.remove('bar-link__active');
      this.setState({
        showingLiveFeed: false,
        showingMap: true
      });
      this.startMapTracking();
    }
  }

  startMapTracking = () => {
    this.mapTimer = setInterval(this.getIssCoords, 2000);
  }

  stopMapTracking = () => {
    clearInterval(this.mapTimer);
  }

  render() {
    return (
      <Fragment>
        <Bar locationName={this.state.locationName} toggleMainScreen={this.toggleMainScreen} />
        <Main issData={this.state.issData} showingLiveFeed={this.state.showingLiveFeed} showingMap={this.state.showingMap} />
      </Fragment>
    );
  } 
}