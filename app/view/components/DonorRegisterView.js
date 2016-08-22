import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUserType } from '../actions/'
import {bindClassHandlers} from '../../utils'
import { commitDonor } from '../actions/'

export default class DonorRegisterView extends Component {
  constructor(props) {
    super(props)

    bindClassHandlers(['clickToAggregateChanges', 'aggregateChanges', 'onSubmit'], this)
  }

    clickToAggregateChanges(event){
        const { name, value } = event.target
        value && this.aggregateChanges(name, value)
    }

  aggregateChanges(name, value) {
    /*let originalName = name 
    if(~Object.keys(dropdownFields).indexOf(originalName)){
        value = dropdownFields[originalName].dataList.find(row => row.value == value).key
        name = dropdownFields[originalName].key
    }*/

    //aggregate changes made to donor 'form' 
    this.setState({[name] : value})
  }

  onSubmit() {
    this.props.dispatch(commitDonor(this.state))
  }

  shouldComponentUpdate(nextProps, nextChanges) {
    const { donor } = nextProps 
    if(donor && nextChanges == null){
        const { latitude, longitude } = donor
        this.aggregateChanges('latitude', latitude)
        this.aggregateChanges('longitude', longitude)

        return true
    }

    return false 
  }

  render() {
    const { donor } = this.props
    let donorRegisterView
    if(donor){ 
        if(!donor.editToken){ 
            donorRegisterView = <form>
                    <input
                        name="firstName"
                        placeholder="First Name"
                        defaultValue=""
                        onBlur={this.clickToAggregateChanges}
                    />
                    <input
                        name="lastName"
                        placeholder="Last Name"
                        defaultValue=""
                        onBlur={this.clickToAggregateChanges}
                    />
                    <input
                        name="number"
                        placeholder="Number"
                        defaultValue=""
                        onBlur={this.clickToAggregateChanges}
                    />
                    <input
                        name="email"
                        placeholder="Email"
                        defaultValue=""
                        onBlur={this.clickToAggregateChanges}
                    />
                    <input
                        name="address"
                        placeholder="Address"
                        defaultValue=""
                        onBlur={this.clickToAggregateChanges}
                    />
                    <input
                        name="latitude"
                        placeholder="Latitude"
                        readOnly='readonly'
                        value={donor.latitude}
                        onBlur={this.clickToAggregateChanges}
                    />
                    <input
                        name="longitude"
                        placeholder="Longitude"
                        readOnly='readonly'
                        value={donor.longitude}
                        onBlur={this.clickToAggregateChanges}
                    />
                    <select name="bloodGroup" onChange={this.clickToAggregateChanges} defaultValue="Blood Group">
                      <option disabled>Blood Group</option>
                      <option defaultValue="A">A</option>
                      <option defaultValue="B">B</option>
                      <option defaultValue="AB">AB</option>
                      <option defaultValue="O">O</option>
                    </select>
                    <button type="button" onClick={this.onSubmit} >
                        Submit
                    </button>
                </form>
        }
        else{
            donorRegisterView = <div>
                Thank you, Edit
                </div>
        }
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
