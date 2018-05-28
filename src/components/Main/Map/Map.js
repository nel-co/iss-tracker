import React, { Component } from 'react';
import SpaceStation from '../../../img/space-station.svg';

export default class Map extends Component {

  componentDidMount = () => {
    let map, marker;
    const style = [
      {
          "stylers": [
              {
                  "hue": "#ff1a00"
              },
              {
                  "invert_lightness": true
              },
              {
                  "saturation": -100
              },
              {
                  "lightness": 33
              },
              {
                  "gamma": 0.5
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#2D333C"
              }
          ]
      }
    ];
    const options = {
      zoom: 4,
      center: new google.maps.LatLng(this.props.issData.latitude, this.props.issData.longitude),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };

    map = new google.maps.Map(document.querySelector('.map-container'), options);
    map.setOptions({
      styles: style
    });
    marker = new google.maps.Marker({position: {lat: this.props.issData.latitude, lng: this.props.issData.longitude}, map: map, icon: SpaceStation});
    setInterval(() => {
      const center = new google.maps.LatLng(this.props.issData.latitude, this.props.issData.longitude);
      marker.setPosition(new google.maps.LatLng(this.props.issData.latitude, this.props.issData.longitude))     
      map.panTo(center);
    }, 2000);
  } 
  
  render() {
    return (
      <div className="map-container">

      </div>
    )
  }
  
}
