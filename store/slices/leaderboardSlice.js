import { createSlice } from '@reduxjs/toolkit'


export const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState: [
        { name: 'john.doe@gmail.com', point: 1 },
        { name: 'jane.smith@gmail.com', point: 7 },
        { name: 'michael.johnson@gmail.com', point: 14 },
        { name: 'emily.wilson@gmail.com', point: 8 },
        { name: 'ryan.thomas@gmail.com', point: 10 },
        { name: 'sarah.jones@gmail.com', point: 12 },
        { name: 'david.brown@gmail.com', point: 9 },
        { name: 'olivia.davis@gmail.com', point: 3 },
        { name: 'william.moore@gmail.com', point: 15 },
        { name: 'natalie.white@gmail.com', point: 6 }
      ],
    reducers: {
    },
})

export const {} = leaderboardSlice.actions

export default leaderboardSlice.reducer