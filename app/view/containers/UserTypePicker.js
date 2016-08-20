import { connect } from 'react-redux'
import UserTypePickerView from '../components/UserTypePickerView'
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

const UserTypePicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTypePickerView)

export default UserTypePicker
