import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    summonerName?:  string | null,
    summonerLevel?: number | null,
    summonerIcon?:  number | null,
    rank?:          string | null,
    winGames?:      number | null,
    lossGames?:     number | null,
    region?:        string | null,
    summonerFound?: boolean| null,
}

const initialState: UserState = {
    summonerName:   null,
    summonerLevel:  null,
    summonerIcon:   null,
    rank:           null,
    winGames:       null,
    lossGames:      null,
    region:         null,
    summonerFound:  null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserState>) => {
            // Object.keys(state).forEach((k) => {
            //     let key = k as keyof UserState;
            //     let value = action.payload[key] ?? null;
            //     state[key] = value;
            // })
            state.summonerName  = action.payload.summonerName   ?? null;
            state.summonerLevel = action.payload.summonerLevel  ?? null;
            state.summonerIcon  = action.payload.summonerIcon   ?? null;
            state.rank          = action.payload.rank           ?? null;
            state.winGames      = action.payload.winGames       ?? null;
            state.lossGames     = action.payload.lossGames      ?? null;
            state.region        = action.payload.region         ?? null;
            state.summonerFound = action.payload.summonerFound  ?? null;
        },
    },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer
