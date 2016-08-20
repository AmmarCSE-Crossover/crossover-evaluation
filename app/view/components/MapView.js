import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initMap } from '../map-provider/map-agent'
//import {generateReactKey} from '~/src/utils/utils'

export default class MapView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    /*const script = document.createElement("script")
    //transform editable fields with limited options to dropdown boxes
    script.textContent = 'Awesomplete.init()'

    document.body.appendChild(script);
    */
    if(this.props.userType){ 
        initMap()
    }
  }

  render() {
    //const { data, headers, editRows, onEditRowClick, addRows } = this.props
    let mapView

    if(this.props.userType){ 
        mapView = <div>
            <style>{"\
              html,\
              body,\
              #map {\
                 height: 100%;\
                 width: 100%;\
                 margin: 0;\
                 padding: 0;\
              }\
              #search {\
                 display: block;\
                 position: absolute;\
                 z-index: 2;\
                 top: 20px;\
                 left: 74px;\
              }\
           "}</style>
         <div className="calcite">
                <div id="map"></div>
                <div id="search"></div>
            </div>
            </div>
    }

    return <div>{mapView}</div>
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
