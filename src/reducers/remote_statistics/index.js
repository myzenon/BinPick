import { UPDATE_REMOTE_STATS } from '../../actions/statistics'
import bin_statistics from './bin_statistics'
import waste_statistics from './waste_statistics'
export default (state, action) => {
    if (state === undefined) {
        state = {
            bin_statistics: bin_statistics(state, action),
            waste_statistics: waste_statistics(state, action)
        }
    }
    switch (action.type) {
        case UPDATE_REMOTE_STATS:
            return {
                bin_statistics: bin_statistics(state, action),
                waste_statistics: waste_statistics(state, action)
            }
        default:
            return state
    }
}
