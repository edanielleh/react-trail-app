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
 
// https://paulkogel.gitbooks.io/redux-docs/content/docs/api/compose.html
const MyMapComponent = compose(
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
  }), {
    onMarkerClick: ({ currentMarker, isOpen }) => (marker) => ({
      currentMarker: marker,
      isOpen: props => { return !isOpen },
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
  withGoogleMap
)(props => (
  <div>
    <div className = "center">
      <button className = "btn btn-primary" onClick={props.onToggleHardMode}>Hard Trails</button>
      <button className = "btn btn-primary" onClick={props.onToggleModerateMode}>Moderate Trails</button>
      <button className = "btn btn-primary" onClick={props.onToggleEasyMode} >Easy Trails</button>
    </div>
  <GoogleMap defaultZoom={9} defaultCenter={{ lat: 39.22, lng: -104.51 }}>
      <div>
{props.easyMode ? (<div>
  <Marker position={{ lat: 39.09811, lng: -104.87112 }} onClick={props.onMarkerClick.bind(this, { lat: 39.09811, lng: -104.87112, name: "test1" })} />
  <Marker position={{ lat: 38.85653, lng: -104.92715 }} onClick={props.onMarkerClick.bind(this, { lat: 38.85653, lng: -104.92715, name: "test2" })} />
  <Marker position={{ lat: 39.24243, lng: -105.26908 }} onClick={props.onMarkerClick.bind(this, { lat: 39.24243, lng: -105.26908, name: "test3" })} />
  </div>): null }
 
{props.moderateMode ? (<div>
  <Marker position={{ lat: 38.80049, lng: -104.89964 }} onClick={props.onMarkerClick.bind(this, { lat: 38.80049, lng: -104.89964, name: "medium1" })} />
  <Marker position={{ lat: 39.40005, lng: -105.16822 }} onClick={props.onMarkerClick.bind(this, { lat: 39.40005, lng: -105.16822, name: "medium2" })} />
  <Marker position={{ lat: 39.17442, lng: -104.75018 }} onClick={props.onMarkerClick.bind(this, { lat: 39.17442, lng: -104.75018, name: "medium3" })} />
  </div>): null }
 
{props.hardMode ? (<div>
  <Marker position={{ lat: 38.85585, lng: -104.93393 }} onClick={props.onMarkerClick.bind(this, { lat: 38.85585, lng: -104.93393, name: "hard1" })} />
  <Marker position={{ lat: 39.65458, lng: -105.36646 }} onClick={props.onMarkerClick.bind(this, { lat: 39.65458, lng: -105.36646, name: "hard2" })} />
  <Marker position={{ lat: 39.49687, lng: -105.3818 }} onClick={props.onMarkerClick.bind(this, { lat: 39.49687, lng: -105.3818, name: "hard3" })} />
  </div>): null }
   
  {props.isOpen() === true ? <Location marker={ props.currentMarker }/>  : null}

    </div>
  </GoogleMap>
  </div>
));
 
export default MyMapComponent;