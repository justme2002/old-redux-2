import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducer/user'

const rootReducer = {
  userReducer
}

const store = configureStore({
  reducer: rootReducer
})

export default store