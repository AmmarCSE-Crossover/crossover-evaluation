import React, {Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import configureStore from './store/configureStore'

const store = configureStore()

if(typeof window != 'undefined'){
render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
)
}
