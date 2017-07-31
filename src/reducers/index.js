import { combineReducers } from 'redux'
import selectedBins from './selectedBins'
import local_statistics from './local_statistics'
import remote_statistics from './remote_statistics'

export default combineReducers({
    selectedBins,
    local_statistics,
    remote_statistics
})
