
import {connect} from 'react-redux'
import DataFromFacebook from '../components/DataFromFacebook'

function mapStateToProps (state) {
  return {
    facebookData: state.facebookData
  }
}

export default connect(mapStateToProps)(DataFromFacebook)
