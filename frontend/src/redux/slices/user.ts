import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    summonerName?: string | null,
    summonerLevel?: number | null,
    summonerIcon?: number | null,
    rank?: string | null,
    winGames?: number | null,
    lossGames?: number | null,
}

const initialState: UserState = {
    summonerName: null,
    summonerLevel: 0,
    summonerIcon: null,
    rank: null,
    winGames: 0,
    lossGames: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserState>) => {
            Object.entries(action.payload).forEach(([k, v]) => {
                let key = k as keyof UserState
                state[key] = v;
            })
        },
    },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer
