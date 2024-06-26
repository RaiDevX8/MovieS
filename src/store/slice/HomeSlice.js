import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiconfig: (state, action) => {
      state.url = action.payload
    },
    getGenres: (state, action) => {
      state.genres = action.payload
    },
  },
})

export const { getApiconfig, getGenres } = homeSlice.actions
export default homeSlice.reducer
