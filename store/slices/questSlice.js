import { createSlice } from '@reduxjs/toolkit'


export const questSlice = createSlice({
  name: 'quest',
  initialState: [
    { id: 1, name: 'Walk 5000 steps', type: 'pending', point: '1', require: 5000 },
    { id: 2, name: 'Walk 10000 steps', type: 'pending', point: '3', require: 10000 },
    { id: 3, name: 'Walk 15000 steps', type: 'pending', point: '5', require: 15000 }
  ],
  reducers: {
    collectQuest: (state, action) => {
      return state = state.filter(item=>item.id !== action.payload)
    }
  },
})

export const { collectQuest } = questSlice.actions

export default questSlice.reducer