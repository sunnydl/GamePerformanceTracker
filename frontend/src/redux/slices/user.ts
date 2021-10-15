import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    summoner_name?: string,
    summoner_level?: number,
    summoner_icon_url?: string,
    rank?: string,
    win_rate?: number,
}

const initialState: UserState = {
    summoner_name: "summoner name",
    summoner_level: 0,
    rank: "rank",
    win_rate: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserState>) => {
            // TODO: figure out how to access key/values of UserState
            Object.entries(action.payload).forEach(([k, v]) => {
                let key = k as keyof UserState
                state[key] = v;
            })
        },
    },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer
