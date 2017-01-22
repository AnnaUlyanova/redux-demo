import { createStore } from 'redux'

import reducers from './reducers'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function updateStuff () {
  document.getElementById('app').innerHTML = store.getState().wombats.reduce(
    (out, wombat) => `
      ${out}
      <li>${wombat}</li>
    `, '')
}

document.addEventListener('DOMContentLoaded', () => {
  store.subscribe(updateStuff)
  updateStuff()
})
