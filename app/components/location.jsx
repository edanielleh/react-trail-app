import React, { Component }from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Forecast from 'react-forecast';
import { compose, withStateHandlers } from "recompose";



function Location(props) {
    return (
      <div id="forecast">
        <Forecast latitude={props.marker.lat} longitude={props.marker.lng} name={props.marker.name} />
      </div>
    )
}
 
export default Location;