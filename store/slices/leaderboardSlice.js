import { createSlice } from '@reduxjs/toolkit'


export const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState: [
        { email: 'john.doe@gmail.com', point: 1 },
        { email: 'jane.smith@gmail.com', point: 7 },
        { email: 'michael.johnson@gmail.com', point: 14 },
        { email: 'emily.wilson@gmail.com', point: 8 },
        { email: 'ryan.thomas@gmail.com', point: 10 },
        { email: 'sarah.jones@gmail.com', point: 11 },
        { email: 'david.brown@gmail.com', point: 9 },
        { email: 'olivia.davis@gmail.com', point: 3 },
        { email: 'william.moore@gmail.com', point: 15 },
        { email: 'natalie.white@gmail.com', point: 6 }
    ],
    reducers: {
        updateLeaderboard: (state, action) => {
            const isHave = state.find(player => player.email === action.payload?.email);
            let newList;
            if (isHave) {
                newList = state.map((player) => {
                    if (player.email === action.payload?.email) {
                        return action.payload;
                    }
                    return player;
                })
            } else {
                newList = [...state, action.payload];
            }
            newList.sort((a, b) => b.point - a.point);
            return state = newList;
        }
    },
})

export const { updateLeaderboard } = leaderboardSlice.actions

export default leaderboardSlice.reducer