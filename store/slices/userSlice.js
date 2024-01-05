import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'counter',
  initialState: {},
  reducers: {
    login: (state,action) => {
      return state = action.payload
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { login } = userSlice.actions

export default userSlice.reducer