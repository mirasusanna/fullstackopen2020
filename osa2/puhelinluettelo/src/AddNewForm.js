import React, {Fragment} from 'react'

const AddNewForm = props => {
  return (
    <Fragment>
      <h2>Add new people</h2>
      <form onSubmit={props.addName}>
        <div>
          Name: <input value={props.newName} onChange={props.handleNameChange}/>
          {props.nameExists(props.newName) &&
            <i>This name exists in the phonebook.</i>
          }
        </div>
        <div>
          Number: <input value={props.newNumber} onChange={props.handleNumberChange}/>
        </div>
        <div>
          <button type="submit">Add new</button>
        </div>
      </form>
    </Fragment>
  )
}

export default AddNewForm