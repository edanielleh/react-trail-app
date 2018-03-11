import React, { Component }from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Forecast from 'react-forecast';
import { compose, withStateHandlers } from "recompose";
 

const enhance = compose(
  withStateHandlers(() => ({
    easyMode: false,
    moderateMode: false
  }))
)

const Location = ({}) =>
{  
  return (
  <div id="forecast">
    {/* <style>{'body { background-color: white; }'}</style> */}
    <Forecast latitude={'39'} longitude={'-104'} name={'test'} color={'white'} style= "color: white"/>
    {/* <Forecast latitude={props.marker.lat} longitude={props.marker.lng} name={props.marker.name} /> */}
  </div>
  )
}

 
export default enhance(Location);