import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initMap } from '../map-provider/map-agent'
//import {generateReactKey} from '~/src/utils/utils'

export default class MapView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    /*const script = document.createElement("script")
    //transform editable fields with limited options to dropdown boxes
    script.textContent = 'Awesomplete.init()'

    document.body.appendChild(script);
    */
    initMap()
  }

  render() {
    //const { data, headers, editRows, onEditRowClick, addRows } = this.props

    return <div id="map"></div>
    /*return <div className="grid-components">
        <div className="grid-container">
            <table className="grid">
                <thead>
                    <HeaderRow headers={headers}/>
                </thead>
                <tbody>
                    {
                        data.map((dataRow, index) =>{
                            let mode = ''
                            if(~editRows.indexOf(index)){
                                mode = 'edit'
                            }
                            if(~addRows.indexOf(index)){
                                mode = 'add'
                            }

                            return <Row 
                                key={generateReactKey()} 
                                rowData={dataRow} 
                                headers={headers}
                                index={index}
                                mode={mode}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
        <div className="add-row-container">
            <span className="add-row" onClick={this.onAddRowClick}>Add New</span>
        </div>
    </div>*/
  }
}

//export default connect()(GridView);
export default MapView
