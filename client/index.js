import { createStore } from 'redux'
import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import App from './components/App'

import reducers from './reducers'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})


// function updateStuff () {
//
//   const $app = $('#app').empty()
//   store.getState().wombats.forEach(wombat => {
//     $app.append($('<li>').html(`${wombat.name}: ${wombat.age}`))
//       .append($('<button>').html('Delete').on('click', () => {
//         store.dispatch(delWombat(wombat.id))
//       }))
//   })
//
// }
