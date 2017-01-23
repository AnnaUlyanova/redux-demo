let nextId = 1

export const addWombat = wombat => {
  return {
    type: 'ADD_WOMBAT',
    wombat: Object.assign({}, wombat, {id: nextId++})
  }
}

export const delWombat = id => {
  return {
    type: 'DEL_WOMBAT',
    id
  }
}


export const updateWombat = (id, wombat) => {
  return {
    type: 'UPDATE_WOMBAT',
    wombat,
    id
  }
}

export const cleanWombats = () => {
  return {
    type: 'CLEAN_WOMBATS'
  }
}
