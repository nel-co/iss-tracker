import React, { Component } from 'react';

export default class Live extends Component {

  getRandomFeed = () => {
    const videoArr = [9408562, 17074538];
    return videoArr[Math.floor(Math.random() * videoArr.length)];
  }
  
  render() {
    return (
      <div className="video-container">
        <iframe
          className="video-live-feed"
          id="UstreamPlayer"
          width="100%" 
          height="100%" 
          src={`http://www.ustream.tv/embed/${this.getRandomFeed()}?html5ui=1&controls=false&showtitle=false&autoplay=true`}
          allowFullScreen
          frameBorder="0" >
        </iframe>
      </div>
    )
  }
  
}
