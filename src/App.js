import React, { memo, useCallback, useState } from 'react'
import { connect } from 'react-redux'
import { addUser } from './store/action/user'

const App = ({ users, addUser }) => {

  const [ input, setInput ] = useState({
    name: "",
    date: ""
  })

  const inputHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  console.log(users)

  const submitAddUser = useCallback((event) => {
    event.preventDefault()
    addUser({
      id: Math.floor(Math.random() * 30000),
      name: input.name,
      date: input.date
    })
  }, [addUser, input])

  return (
    <div>
      <h1>Create a user</h1>

      <form onSubmit={submitAddUser}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='name...' name="name" value={input.name} onChange={inputHandler}/>
          <p>{input.name}</p>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="" name="date" value={input.date} onChange={inputHandler} />
          <p>{input.date}</p>
        </div>
        <div>
          <input type="submit" value="add user" />
        </div>
      </form>
      <div>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} - {user.date}</li>
  
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