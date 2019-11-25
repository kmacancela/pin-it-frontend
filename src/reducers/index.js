import isLoggedReducer from './isLogged'
import getTailorsReducer from './getTailors'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  isLogged: isLoggedReducer,
  getTailors: getTailorsReducer
})

export default allReducers
