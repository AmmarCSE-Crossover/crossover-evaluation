import { connect } from 'react-redux'
import MapView from '../components/MapView'
//import {editRow} from '../actions/index'

const mapStateToProps = (state) => {
  /*const { data,
    headers,
    editRows,
    addRows
  } = state*/

  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const Map = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapView)

export default Map
