import React from 'react'

const Filter = props => {
  return (
    <div>
      <h2>Filter People</h2>
      <input
        value={props.searchTerm}
        onChange={props.handleSearchTermChange}
        placeholder='Arto'
      />
    </div>
  )
}

export default Filter