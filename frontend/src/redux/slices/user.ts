import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { UserState } from '../../interfaces'
import axios from 'axios';

const initialState: UserState = {
    summonerName: 'Player',
    summonerLevel: 0,
    summonerIcon:  undefined,
    rank:          'IRON',
    leaguePoints:  0,
    winGames:      0,
    lossGames:     0,
    favChamps:     [],
    region:        'NA',
    summonerFound: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserState>) => {
            return { ...action.payload };
        },
    },
})

function fetchUserData(query: string, history: any) {
    return async (dispatch: Dispatch) => {
        if (query) {
            const params = new URLSearchParams(query);
            const summonerName = params.get('summonerName');
            const region = params.get('region') ?? 'NA'; // Defaults to NA region
            if (summonerName) {
                return axios.get('/api/summonerInfo', {
                    params: {
                    summonerName: summonerName,
                    region: region,
                    }
                })
                .then((res) => {
                    const userData = res.data;
                    console.log('user found:', userData);
                    dispatch(setUserData({ summonerFound: true, region: region, ...userData }));
                })
                .catch((err) => {
                    console.log('user not found:\n', err.response || err);
                    dispatch(setUserData({summonerFound: false, region: region, summonerName: summonerName}));
                    history.push({
                        pathname: '/usernotfound',
                        search: new URLSearchParams({
                          summonerName: summonerName,
                          region: region,
                        }).toString(),
                    });
                });
            }
        }
    }
}

export const { setUserData } = userSlice.actions

export default userSlice.reducer

export { fetchUserData }
