import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import questReducer from './slices/questSlice'
import leaderboardReducer from './slices/leaderboardSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    quest: questReducer,
    leaderboard: leaderboardReducer
  },
})