import { createStore } from 'redux'

import { addWombat, delWombat, cleanWombats } from './actions'

import reducers from './reducers'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


function updateStuff () {

  const $app = $('#app').empty()
  store.getState().wombats.forEach(wombat => {
    $app.append($('<li>').html(`${wombat.name}: ${wombat.age}`))
      .append($('<button>').html('Delete').on('click', () => {
        store.dispatch(delWombat(wombat.id))
      }))
  })

  // $('#app').append(store.getState().wombats.map(wombat => {
  //   $('<li>').html(`${wombat.name}: ${wombat.age}`).append($('<button>'))
  // }).join(' '))

  // let html = ''
  //
  // html += store.getState().wombats.reduce(
  //   (out, wombat) => `
  //     ${out}
  //     <li>${wombat.name}: ${wombat.age}</li>
  //   `, '')
  //
  // const app = document.getElementById('app')
  // app.innerHTML = html
}

$('#controls').append(
  $('<form>')
    .append($('<input id="name">').css('margin', '15px'))
    .append($('<input id="age">').css('margin', '15px'))
    .append($('<button>').html('Submit'))
    .on('submit', event => {
      event.preventDefault()
      const name = $('#name').val()
      const age = $('#age').val()
      store.dispatch(addWombat({name, age}))
    })
  )
  .append($('<button>').html('Clean All Wombats')
    .on('click', () => {
      store.dispatch(cleanWombats())
    }))


//   const button = document.createElement('button')
//   button.innerHTML = 'Add Wombat'
//   button.addEventListener('click', () => {
//     store.dispatch(addWombat({name: 'Steve', age: 15}))
//   })
//   app.appendChild(button)
// }

// document.addEventListener('DOMContentLoaded', () => {
store.dispatch(addWombat({name: 'Gertrude', age: 5}))
store.dispatch(addWombat({name: 'Bart', age: 5}))
store.dispatch(addWombat({name: 'Alice', age: 5}))

store.subscribe(updateStuff)
updateStuff()
// })
