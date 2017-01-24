import React from 'react'

let nextId = 1

export default React.createClass({

  getInitialState () {
    return {
      itemName: ''
    }
  },

  updateWombatName (evt) {
    this.setState({ wombatName: evt.target.value })
  },

  render () {
    return (
      <div>
        <ul>
          {this.props.wombats.map(wombat => (
            <li key={wombat.id}>{wombat.name}</li>
          ))}
        </ul>
        <input id="wombat-name" onChange={this.updateWombatName} />
        <button onClick={() => this.props.addWombat({
          id: ++nextId,
          name: this.state.wombat
        })}>ADD WOMBAT</button>
      </div>
    )
  }
})
