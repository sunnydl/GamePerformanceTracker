import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { MatchState } from "../../interfaces";
import axios from 'axios';

const initialState: MatchState[] = [];

export const matchesSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {
        setMatchesData: (state, action: PayloadAction<Array<MatchState>>) => {
            return [...action.payload];
        }
    },
})

function fetchMatchesData(query: string, numOfMatch: number) {
    return async (dispatch: Dispatch) => {
        if (query) {
            const params = new URLSearchParams(query);
            const summonerName = params.get('summonerName');
            const region = params.get('region') ?? "NA"; // Defaults to NA region
            if (summonerName) {
                axios.get('/api/matches/', {
                    params: {
                        summonerName: summonerName,
                        region: region,
                        numOfMatch: numOfMatch,
                    }
                })
                .then((res) => {
                    const matchesData = res.data;
                    console.log('matches data found:', matchesData);
                    dispatch(setMatchesData(matchesData));
                })
                .catch((err) => {
                    console.log('matches data not found:\n', err.response || err);
                    dispatch(setMatchesData(initialState));
                });
            }
        }
    }
}

export const { setMatchesData } = matchesSlice.actions

export default matchesSlice.reducer

export { fetchMatchesData }
