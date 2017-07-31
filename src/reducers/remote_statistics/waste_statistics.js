import { UPDATE_REMOTE_STATS } from '../../actions/statistics'

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE_REMOTE_STATS:
            return action.waste_statistics
        default:
            return state
    }
}
