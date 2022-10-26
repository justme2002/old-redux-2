const userState = {
  users: [
    {
      id: "1",
      name: "Huy"
    }
  ]
}

const userReducer = (state = userState, action) => {
  const { type, payload } = action
  switch (type) {
    case "ADD_USER": 
    
      return {
        ...state,
        users: [...state.users, payload.user]
      }

    default:
      return state
  }
}

export { userReducer }