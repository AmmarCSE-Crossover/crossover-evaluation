/*import React from 'react'
let DOM = React.DOM, div = DOM.div, button = DOM.button, ul = DOM.ul, li = DOM.li

// This is just a simple example of a component that can be rendered on both
// the server and browser

module.exports = React.createClass({

  // We initialise its state by using the `props` that were passed in when it
  // was first rendered. We also want the button to be disabled until the
  // component has fully mounted on the DOM
  getInitialState: function() {
    return {items: this.props.items, disabled: true}
  },

  // Once the component has been mounted, we can enable the button
  componentDidMount: function() {
    this.setState({disabled: false})
  },

  // Then we just update the state whenever its clicked by adding a new item to
  // the list - but you could imagine this being updated with the results of
  // AJAX calls, etc
  handleClick: function() {
    this.setState({
      items: this.state.items.concat('Item ' + this.state.items.length)
    })
  },

  // For ease of illustration, we just use the React JS methods directly
  // (no JSX compilation needed)
  // Note that we allow the button to be disabled initially, and then enable it
  // when everything has loaded
  render: function() {

    return div(null,

      button({onClick: this.handleClick, disabled: this.state.disabled}, 'Add Item'),

      ul({children: this.state.items.map(function(item) {
        return li(null, item)
      })})

    )
  },
})
*/


import React, { Component } from 'react'
import { connect } from 'react-redux'
/*import { fetchFilterData } from '../src/filters/actions'
import { fetchGridData } from '../src/grid/actions'
import { fetchPagerData } from '../src/pager/actions'*/
import Map from './containers/Map'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    /*const { dispatch, search } = this.props
    dispatch(fetchFilterData(search))
    dispatch(fetchGridData(search))
    dispatch(fetchPagerData(search))*/
  }

  render() {
    return (
        <div>
            <Map />
        </div>
    )
  }
}

//export default connect()(App)
export default App
