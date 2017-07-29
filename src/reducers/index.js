import { combineReducers } from 'redux'
import selectedBins from './selectedBins'
import routes from './routes'

export default combineReducers({
    selectedBins,
    routes
})
