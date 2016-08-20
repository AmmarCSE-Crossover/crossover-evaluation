import { connect } from 'react-redux'
import DonorRegisterView from '../components/DonorRegisterView'

const mapStateToProps = (state) => {
  const { donor } = state

  return { donor }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const DonorRegister = connect(
  mapStateToProps,
  mapDispatchToProps
)(DonorRegisterView)

export default DonorRegister
