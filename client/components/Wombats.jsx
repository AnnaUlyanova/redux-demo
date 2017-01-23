import React from 'react'

export default React.createClass({
  render () {
    return (
      <ul>
        {this.props.wombats.map(wombat => (
          <li>{wombat.name}</li>
        ))}
      </ul>
    )
  }
})
