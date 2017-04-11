import {combineReducers} from 'redux'
import facebookReducer from './reducer-facebook-data'

const allReducers = combineReducers({
  facebookData: facebookReducer
})

export default allReducers
