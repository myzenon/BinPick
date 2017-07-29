import { UPDATE_WASTE_STATS } from '../actions/statistics'

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE_WASTE_STATS:
            return action.waste_statistics
        default:
            return state
    }
}
