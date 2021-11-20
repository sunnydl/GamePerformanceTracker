import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { LeaderboardState } from "../../interfaces";
import axios from 'axios';

import { tiers, divisions, queueTypes } from "../../pages/Leaderboard/components/enums";

const initialState: LeaderboardState = {
    tier: 'Challenger',
    division: 'I',
    queueType: 'SOLO',
    leaderboard: [],
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
            return state;
        },
        setLeaderboardFilter: (state, action: PayloadAction<LeaderboardState>) => {
            state.tier          =       action.payload.tier ?? 'Challenger';
            state.division      =       action.payload.division ?? 'I';
            state.queueType     =       action.payload.queueType ?? 'SOLO';
            return state;
        },
    },
})

function fetchLeaderboardData(tier: string, division: string, queueType: string) {
    return async (dispatch: Dispatch) => {
        if(tiers.includes(tier) && divisions.includes(division) && queueTypes.includes(queueType)) {
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
                    leaderboard: data,
                }));
            } catch (err: any) {
                console.log("cannot load leaderboard data:\n", err.response || err);
            }
        }
    }
}

export const { setLeaderboardData, setLeaderboardFilter } = leaderboardSlice.actions

export default leaderboardSlice.reducer

export { fetchLeaderboardData }
