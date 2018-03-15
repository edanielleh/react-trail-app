import React, { Component } from 'react';
import Forecast from 'react-forecast';
 
class Location extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div>
      <div id="forecast">
        <Forecast key={this.props.marker.id} latitude={this.props.marker.lat} longitude={this.props.marker.lng} name={this.props.marker.name} />
      </div>
      <p>Type: {this.props.marker.type}</p>
      <p>Length: {this.props.marker.length} miles</p>
      </div>
    )
  }
}
 
export default Location;
