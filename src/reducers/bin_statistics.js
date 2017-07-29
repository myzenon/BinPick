import { UPDATE_BINS_STATS } from '../actions/statistics'
import bins from '../data/bins'
const bin_statistics = {}
Object.keys(bins).forEach(binKey => bin_statistics[binKey] = 0)
export default (state = bin_statistics, action) => {
    switch (action.type) {
        case UPDATE_BINS_STATS:
            return action.bin_statistics
        default:
            return state
    }
}
