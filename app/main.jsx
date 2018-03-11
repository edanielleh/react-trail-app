'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import MyMapComponent from './components/Root'
import Location from './components/location'

render (
  <Provider store={store}>
    <MyMapComponent isMarkerShown/>
  </Provider>,
  document.getElementById('main')
)
