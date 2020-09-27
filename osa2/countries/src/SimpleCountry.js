import React, { Fragment } from 'react'

const SimpleCountry = props => {
  return (
    <Fragment>
      <h3>{props.name}</h3>
      <button onClick={props.handleShowCountryDetails}>Show details</button>
    </Fragment>
  )
}

export default SimpleCountry