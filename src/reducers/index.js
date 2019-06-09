import { combineReducers } from 'redux'
import cats_reducer from './cats_reducer'

const rootReducer = combineReducers({
  cats: cats_reducer
})

export default rootReducer
