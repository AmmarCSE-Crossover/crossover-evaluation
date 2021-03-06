import { connect } from 'react-redux'
import MapView from '../components/MapView'
//import {editRow} from '../actions/index'

const mapStateToProps = (state) => {
  const { userType } = state

  return { userType }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const Map = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapView)

export default Map
