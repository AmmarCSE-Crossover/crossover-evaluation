import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initMap } from '../map-provider/map-agent'
import { setUserType } from '../actions/'
//import {generateReactKey} from '~/src/utils/utils'

export default class UserTypePickerView extends Component {
  constructor(props) {
    super(props)
  }

  onTypePick(value) {
    this.props.dispatch(setUserType(value))
  }

  render() {
    //const { data, headers, editRows, onEditRowClick, addRows } = this.props
    let pickerView
    if(!this.props.userType){ 
        pickerView = <div>
                I am a
                <button onClick={(event)=> this.onTypePick(event.target.value)} value="donor">Donor</button>
                <button onClick={(event)=> this.onTypePick(event.target.value)} value="patient">Patient</button>
            </div>
    }

    return <div>{pickerView}</div>
  }
}

export default UserTypePickerView
