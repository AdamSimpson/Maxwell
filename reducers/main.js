import { combineReducers } from 'redux'
import Bridges from './bridges.js'

const rootReducer = combineReducers({
    bridges: Bridges
});

export default rootReducer;
