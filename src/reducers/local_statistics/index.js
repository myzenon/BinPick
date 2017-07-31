import { ADD_BIN_LOCAL_STATS, ADD_WASTE_LOCAL_STATS, RESET_LOCAL_STATS } from '../../actions/statistics'
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
        case ADD_WASTE_LOCAL_STATS:
            return {
                ...state,
                waste_statistics: waste_statistics(state.waste_statistics, action)
            }
        case ADD_BIN_LOCAL_STATS:
            return {
                ...state,
                bin_statistics: bin_statistics(state.bin_statistics, action)
            }
        case RESET_LOCAL_STATS:
            return {
                bin_statistics: bin_statistics(state.bin_statistics, action),
                waste_statistics: waste_statistics(state.waste_statistics, action)
            }
        default:
            return state
    }
}
