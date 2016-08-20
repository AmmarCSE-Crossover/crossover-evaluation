import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUserType } from '../actions/'
//import {generateReactKey} from '~/src/utils/utils'

export default class DonorRegisterView extends Component {
  constructor(props) {
    super(props)
  }

  onTypePick(value) {
    this.props.dispatch(setUserType(value))
  }

  render() {
    //const { data, headers, editRows, onEditRowClick, addRows } = this.props
    let donorRegisterView
    if(this.props.donor){ 
        donorRegisterView = <div>
                <input
                    name="firstName"
                    placeholder="First Name"
                    defaultValue=""
                />
                <input
                    name="lastName"
                    placeholder="Last Name"
                    defaultValue=""
                />
                <input
                    name="number"
                    placeholder="Number"
                    defaultValue=""
                />
                <input
                    name="email"
                    placeholder="Email"
                    defaultValue=""
                />
                <input
                    name="address"
                    placeholder="Address"
                    defaultValue=""
                />
                <input
                    name="latitude"
                    placeholder="Latitude"
                    defaultValue=""
                />
                <input
                    name="longitude"
                    placeholder="Longitude"
                    defaultValue=""
                />
                <select defaultValue="A">
                  <option defaultValue="A">A</option>
                  <option defaultValue="B">B</option>
                  <option defaultValue="AB">AB</option>
                  <option defaultValue="O">O</option>
                </select>
            </div>
    }

    return <div>{donorRegisterView}</div>
  }
}

export default DonorRegisterView
/*<input
    name={propertyKey}
    className={className}
    data-list={dataList}
    defaultValue={value}
    readOnly={!mode || dataList ? 'readonly' : ''}
    onBlur={
        (event) => {
            aggregateRowState(event.target.name, event.target.value)
        }
    }
/>*/
