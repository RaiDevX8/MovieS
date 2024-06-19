import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './slice/HomeSlice'

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
})

export default store
