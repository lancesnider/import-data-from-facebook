
import {connect} from 'react-redux'
import FacebookDataImportForm from '../components/FacebookDataImportForm'

function mapStateToProps (state) {
  return {
    facebookData: state.facebookData
  }
}

export default connect(mapStateToProps)(FacebookDataImportForm)
