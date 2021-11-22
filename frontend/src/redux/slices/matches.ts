import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { MatchState } from "../../interfaces";
import axios from 'axios';

// NOTE: Temporary -- Sample Data
const initialState: MatchState[] = [
    {
        gameMode: 'CLASSIC',
        gameDate: '14 Nov 2021',
        win: true,
        role: 'CARRY',
        championName: 'Jhin',
        kills: 12,
        deaths: 2,
        assists: 31,
        gptScore: 12.5,
        visionPerMin: 0,
        csPerMin: 0,
        dmgPerMin: 0,
        visionAmt: 0,
        csAmt: 0,
        dmgAmt: 0
    },
    {
        gameMode: 'CLASSIC',
        gameDate: '13 Nov 2021',
        win: false,
        role: 'SUPPORT',
        championName: 'Poppy',
        kills: 3,
        deaths: 6,
        assists: 11,
        gptScore: 9,
        visionPerMin: 0,
        csPerMin: 0,
        dmgPerMin: 0,
        visionAmt: 0,
        csAmt: 0,
        dmgAmt: 0
    },
    {
        gameMode: 'CLASSIC',
        gameDate: '12 Nov 2021',
        win: true,
        role: 'SUPPORT',
        championName: 'Leona',
        kills: 19,
        deaths: 7,
        assists: 15,
        gptScore: 14.5,
        visionPerMin: 0,
        csPerMin: 0,
        dmgPerMin: 0,
        visionAmt: 0,
        csAmt: 0,
        dmgAmt: 0
    },
    {
        gameMode: 'CLASSIC',
        gameDate: '11 Nov 2021',
        win: true,
        role: 'CARRY',
        championName: 'Jhin',
        kills: 9,
        deaths: 5,
        assists: 22,
        gptScore: 11.5,
        visionPerMin: 0,
        csPerMin: 0,
        dmgPerMin: 0,
        visionAmt: 0,
        csAmt: 0,
        dmgAmt: 0
    },
    {
        gameMode: 'CLASSIC',
        gameDate: '10 Nov 2021',
        win: false,
        role: 'SUPPORT',
        championName: 'Poppy',
        kills: 4,
        deaths: 6,
        assists: 9,
        gptScore: 9.5,
        visionPerMin: 0,
        csPerMin: 0,
        dmgPerMin: 0,
        visionAmt: 0,
        csAmt: 0,
        dmgAmt: 0
    },
    {
        gameMode: 'CLASSIC',
        gameDate: '9 Nov 2021',
        win: false,
        role: 'SUPPORT',
        championName: 'Poppy',
        kills: 5,
        deaths: 8,
        assists: 12,
        gptScore: 10.5,
        visionPerMin: 0,
        csPerMin: 0,
        dmgPerMin: 0,
        visionAmt: 0,
        csAmt: 0,
        dmgAmt: 0
    }
];

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
