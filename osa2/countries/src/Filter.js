import React from 'react'

const Filter = props => {
  return (
    <div>
      <h2>Filter countries</h2>
      <input
        value={props.searchTerm}
        onChange={props.handleSearchTermChange}
        placeholder='Finland'
      />
    </div>
  )
}

export default Filter