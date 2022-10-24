import React, { useCallback, useState } from 'react'
import { connect } from 'react-redux'
import { addUser } from './store/action/user'

const App = ({ users, addUser }) => {

  const [ input, setInput ] = useState("")

  const inputHandler = useCallback((event) => {
    setInput(event.target.value)
  }, [])

  const submitAddUser = (event) => {
    event.preventDefault()
    addUser({
      id: Math.floor(Math.random() * 30000),
      name: input
    })
  }

  return (
    <div>
      <h1>Create a user</h1>

      <form onSubmit={submitAddUser}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='name...' value={input} onChange={inputHandler}/>
        </div>
        <div>
          <input type="submit" value="add user" />
        </div>
      </form>
      <div>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    addUser: (user) => dispatch(addUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)