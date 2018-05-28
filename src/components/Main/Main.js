import React, { Component, Fragment } from 'react';
import Live from './Live/Live';
import Map from './Map/Map';

import './Main.css';

export default class Main extends Component {
  render() {
    return(
      <Fragment>
        {this.props.showingLiveFeed && !this.props.showingMap ? <Live /> : null}
        {this.props.issData.latitude && !this.props.showingLiveFeed && this.props.showingMap ? <Map issData={this.props.issData} /> : null}
      </Fragment>
    );
  }
}