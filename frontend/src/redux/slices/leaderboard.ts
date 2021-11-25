import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { LeaderboardState } from "../../interfaces";
import axios from 'axios';

import { tiers, divisions, queueTypes } from "../../pages/Leaderboard/components/enums";

const initialState: LeaderboardState = {
    tier: 'Challenger',
    division: 'I',
    queueType: 'SOLO',
    loading: false,
    leaderboard: [
        {
            summonerName: 'sunny1',
            summonerLevel: 42,
            summonerIcon: 2,
            rank: 'PLATINUM',
            leaguePoints: 281,
            winGames: 4,
            lossGames: 4,
            favChamps: ['Irelia', 'Leona', 'Lulu'],
            region: 'NA',
        },
        {
            summonerName: 'sunny2',
            summonerLevel: 42,
            summonerIcon: 2,
            rank: 'PLATINUM',
            leaguePoints: 281,
            winGames: 4,
            lossGames: 4,
            favChamps: ['Irelia', 'Leona', 'Lulu'],
            region: 'NA',
        },
        {
            summonerName: 'sunny3',
            summonerLevel: 42,
            summonerIcon: 2,
            rank: 'PLATINUM',
            leaguePoints: 281,
            winGames: 4,
            lossGames: 4,
            favChamps: ['Irelia', 'Leona', 'Lulu'],
            region: 'NA',
        }
    ],
};

const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {
        setLeaderboardData: (state, action: PayloadAction<LeaderboardState>) => {
            state.tier          =       action.payload.tier ?? 'Challenger';
            state.division      =       action.payload.division ?? 'I';
            state.queueType     =       action.payload.queueType ?? 'SOLO';
            state.leaderboard   =       [...action.payload.leaderboard];
            state.loading       =       action.payload.loading  ??  false;
            return state;
        },
        setLeaderboardFilter: (state, action: PayloadAction<LeaderboardState>) => {
            state.tier          =       action.payload.tier ?? 'Challenger';
            state.division      =       action.payload.division ?? 'I';
            state.queueType     =       action.payload.queueType ?? 'SOLO';
            return state;
        },
        setLoading: (state, action: PayloadAction<any>) => {
            state.loading       =       action.payload.loading  ??  true;
            return state;
        },
    },
})

function fetchLeaderboardData(tier: string, division: string, queueType: string) {
    return async (dispatch: Dispatch) => {
        if(tiers.includes(tier) && divisions.includes(division) && queueTypes.includes(queueType)) {
            dispatch(setLoading({
                loading: true,
            }));
            try {
                const { data } = await axios.get('/api/summonerInfo/leaderboard', {
                    params: {
                        tier: tier,
                        division: division,
                        queueType: queueType,
                    }
                });
                console.log('leaderboard data found:', data);
                dispatch(setLeaderboardData({
                    tier: tier,
                    division: division,
                    queueType: queueType,
                    loading: false,
                    leaderboard: data,
                }));
            } catch (err: any) {
                console.log("cannot load leaderboard data:\n", err.response || err);
            }
        }
    }
}

export const { setLeaderboardData, setLeaderboardFilter, setLoading } = leaderboardSlice.actions

export default leaderboardSlice.reducer

export { fetchLeaderboardData }
