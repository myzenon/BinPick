import UPDATE_SELECTED_BINS from '../actions/selectedBins'
import bins from '../data/bins'
const binKeys = Object.keys(bins)
const binsInitial = {}
binsInitial[binKeys] = false
export default (state = binsInitial, action) => {
    switch (action.type) {
        case UPDATE_SELECTED_BINS:
            return {
                ...action.selectedBins
            }
        default:
            return state
    }
}
