'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import GoogleMapTrailComponent from './components/Root'
import Location from './components/location'

render (
  <Provider store={store}>
    <GoogleMapTrailComponent/>
  </Provider>,
  document.getElementById('main')
)
