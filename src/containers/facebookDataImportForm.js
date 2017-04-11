import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { clickLogin } from '../actions/index'
import FacebookDataImportForm from '../components/FacebookDataImportForm'

function mapStateToProps (state) {
  return {
    facebookData: state.facebookData
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    clickLogin: clickLogin
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FacebookDataImportForm)
