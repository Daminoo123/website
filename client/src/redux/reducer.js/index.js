import {combineReducers} from 'redux'
 import useReducer from './reducer'
 import postreducer from './postreducer';
const rootReducer = combineReducers({useReducer,postreducer})

export default rootReducer;