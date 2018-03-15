/**
Written by Danielle Howard
*/

import React from "react";
import Location from "./location.jsx";
import ReactDOM from "react-dom";
import { compose, withProps, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import axios from 'axios';

function TrailButtons(props) {
  return (
    <div className="center">
      <button className="btn btn-primary" onClick={props.props.onToggleHardMode}>Hard Trails</button>
      <button className="btn btn-primary" onClick={props.props.onToggleModerateMode}>Moderate Trails</button>
      <button className="btn btn-primary" onClick={props.props.onToggleEasyMode} >Easy Trails</button>
    </div>
  )
}

class EasyTrails extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.setState({ markers: [] })
  }
  componentDidMount() {
    axios.get("/api/trails/difficulty/easy")
      .then(easyTrails => this.setState(() => {
        return {
          markers: easyTrails.data
        };
      })
      )
  };
  render() {
    return (
      <div>
        {this.state.markers.map(marker =>
          <Marker key={marker.id} position={{ lat: marker.lat, lng: marker.lng }} onClick={this.props.props.onMarkerClick.bind(this, marker)} />
        )}
      </div>
    )
  }
}

class ModerateTrails extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.setState({ markers: [] })
  }
  componentDidMount() {
    axios.get("/api/trails/difficulty/moderate")
      .then(moderateTrails => this.setState(() => {
        return {
          markers: moderateTrails.data
        };
      })
      )
  };
  render() {
    return (
      <div>
        {this.state.markers.map(marker =>
          <Marker key={marker.id} position={{ lat: marker.lat, lng: marker.lng }} onClick={this.props.props.onMarkerClick.bind(this, marker)} />
        )}
      </div>
    )
  }
}

class HardTrails extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.setState({ markers: [] })
  }
  componentDidMount() {
    axios.get("/api/trails/difficulty/hard")
      .then(hardTrails => this.setState(() => {
        return {
          markers: hardTrails.data
        };
      })
      )
  };
  render() {
    return (
      <div>
        {this.state.markers.map(marker =>
          <Marker key={marker.id} position={{ lat: marker.lat, lng: marker.lng }} onClick={this.props.props.onMarkerClick.bind(this, marker)} />
        )}
      </div>
    )
  }
}

function GoogleMapsTrailComponent(props) {
  return (
    <div>
      <TrailButtons props={props} />
      <GoogleMap defaultZoom={9} defaultCenter={{ lat: 39.22, lng: -104.51 }}>
        <div>
          {props.easyMode ? <EasyTrails props={props} /> : null}
          {props.moderateMode ? <ModerateTrails props={props} /> : null}
          {props.hardMode ? <HardTrails props={props} /> : null}
          {props.isOpen() === true ? <Location marker={props.currentMarker} /> : null} 
        </div>
      </GoogleMap>
    </div>
  )
}

export default compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=" + process.env.GOOGLE_API_KEY + "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withStateHandlers(() => ({
    easyMode: false,
    moderateMode: false,
    hardMode: false,
    isOpen: props => { return false },
    currentMarker: null
  }),
  {
    onMarkerClick: ({ currentMarker, isOpen }) => (marker) => ({
      currentMarker: marker,
      isOpen: props => { return true },
    }),
    onToggleEasyMode: ({ easyMode }) => () => ({
      easyMode: !easyMode,
    }),
    onToggleModerateMode: ({ moderateMode }) => () => ({
      moderateMode: !moderateMode,
    }),
    onToggleHardMode: ({ hardMode }) => () => ({
      hardMode: !hardMode,
    }),
  }),
  withScriptjs,
  withGoogleMap,
)(GoogleMapsTrailComponent)