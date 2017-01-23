const wombats = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WOMBAT':
      return [...state, action.wombat]

    case 'DEL_WOMBAT':
      return state.filter(wombat => wombat.id !== action.id)

    case 'UPDATE_WOMBAT':
      return state.map(wombat => {
        if (wombat.id === action.id) {
          return Object.assign({}, wombat, action.wombat)
        } else {
          return wombat
        }
      })

    case 'CLEAN_WOMBATS':
    return []

    default:
      return state
  }
}

export default wombats
