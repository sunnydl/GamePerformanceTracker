import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { UserState } from '../../interfaces'
import axios from 'axios';

const initialState: UserState = {}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserState>) => {
            state.summonerName  = action.payload.summonerName   ?? undefined;
            state.summonerLevel = action.payload.summonerLevel  ?? undefined;
            state.summonerIcon  = action.payload.summonerIcon   ?? undefined;
            state.rank          = action.payload.rank           ?? undefined;
            state.winGames      = action.payload.winGames       ?? undefined;
            state.lossGames     = action.payload.lossGames      ?? undefined;
            state.favChamps     = action.payload.favChamps      ?? undefined;
            state.region        = action.payload.region         ?? undefined;
            state.summonerFound = action.payload.summonerFound  ?? undefined;
        },
    },
})

function handleSearchParams(query: string) {
    return async (dispatch: Dispatch) => {
        if (query) {
            const params = new URLSearchParams(query);
            const summonerName = params.get('summonerName');
            const region = params.get('region') ?? "NA"; // Defaults to NA region
            console.log(region);
            if (summonerName) {
                axios.get('/api/summonerInfo', {
                    params: {
                    summonerName: summonerName,
                    region: region,
                    }
                })
                .then((res) => {
                    const userData = res.data;
                    console.log('user found:', userData);
                    dispatch(setUserData({summonerFound: true, region: region, ...userData}));
                })
                .catch((err) => {
                    console.log('user not found:\n', err.response || err);
                    dispatch(setUserData({summonerFound: false, region: region, summonerName: summonerName}));
                });
            }
        }
    }
}

export const { setUserData } = userSlice.actions

export default userSlice.reducer

export { handleSearchParams }
