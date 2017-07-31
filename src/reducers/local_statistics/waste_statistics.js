import { ADD_WASTE_LOCAL_STATS, RESET_LOCAL_STATS } from '../../actions/statistics'

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_WASTE_LOCAL_STATS:
            const waste_stats = {...state}
            waste_stats[action.category] = waste_stats[action.category] ? waste_stats[action.category] + 1 : 1
            return waste_stats
        case RESET_LOCAL_STATS:
            return {}
        default:
            return state
    }
}
