import { ADD_BIN_LOCAL_STATS, RESET_LOCAL_STATS } from '../../actions/statistics'
import bins from '../../data/bins'
const bin_statistics = {}
Object.keys(bins).forEach(binKey => bin_statistics[binKey] = 0)
export default (state = bin_statistics, action) => {
    switch (action.type) {
        case ADD_BIN_LOCAL_STATS:
            const bin_stats = {...state}
            bin_stats[action.binType]++
            return bin_stats
        case RESET_LOCAL_STATS:
            return bin_statistics
        default:
            return state
    }
}
