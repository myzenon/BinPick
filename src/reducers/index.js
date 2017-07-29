import { combineReducers } from 'redux'
import selectedBins from './selectedBins'
import statistics from './statistics'

export default combineReducers({
    selectedBins,
    statistics
})
