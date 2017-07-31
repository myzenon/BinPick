export const UPDATE_REMOTE_STATS = 'UPDATE_REMOTE_STATS'
export const updateRemoteStats = (stats) => ({
    type: UPDATE_REMOTE_STATS,
    ...stats
})

export const RESET_LOCAL_STATS = 'RESET_LOCAL_STATS'
export const resetLocalStats = () => ({
    type: RESET_LOCAL_STATS
})

export const ADD_BIN_LOCAL_STATS = 'ADD_BIN_LOCAL_STATS'
export const addBinLocalStats = (binType) => ({
    type: ADD_BIN_LOCAL_STATS,
    binType
})

export const ADD_WASTE_LOCAL_STATS = 'ADD_WASTE_LOCAL_STATS'
export const addWasteLocalStats = (category) => ({
    type: ADD_WASTE_LOCAL_STATS,
    category
})