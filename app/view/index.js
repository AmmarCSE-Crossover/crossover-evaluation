import React, {Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import configureStore from './store/configureStore'

const store = configureStore()

class AppProvider extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return 
          <Provider store={store}>
            <App store={store}/>
          </Provider> 
       
  }
}

let nothing = {} 
//export default nothing 
export default AppProvider
