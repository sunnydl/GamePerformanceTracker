import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { LeaderboardState } from '../../interfaces';
import axios from 'axios';

import {
    tiers,
    divisions,
    queueTypes,
} from '../../pages/Leaderboard/components/enums';
import { FetchOperations } from '../../enums';

const initialState: LeaderboardState = {
    tier: 'Challenger',
    division: 'I',
    queueType: 'SOLO',
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
        },
    ],
};

const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {
        setLeaderboardData: (
            state,
            action: PayloadAction<LeaderboardState>
        ) => {
            state.tier = action.payload.tier ?? 'Challenger';
            state.division = action.payload.division ?? 'I';
            state.queueType = action.payload.queueType ?? 'SOLO';
            state.leaderboard = [...action.payload.leaderboard];
            return state;
        },
        setLeaderboardFilter: (
            state,
            action: PayloadAction<LeaderboardState>
        ) => {
            state.tier = action.payload.tier ?? 'Challenger';
            state.division = action.payload.division ?? 'I';
            state.queueType = action.payload.queueType ?? 'SOLO';
            return state;
        },
    },
});

function fetchLeaderboardData(
    tier: string,
    division: string,
    queueType: string,
    operation: string
) {
    let fetchUrl: string;
    switch (operation) {
        case FetchOperations.FETCH:
            fetchUrl = '/api/summonerInfo/leaderboard';
            break;
        case FetchOperations.UPDATE:
            fetchUrl = '/api/summonerInfo/update-leaderboard';
            break;
        default:
            fetchUrl = '/api/summonerInfo/leaderboard';
    }
    return async (dispatch: Dispatch) => {
        if (
            tiers.includes(tier) &&
            divisions.includes(division) &&
            queueTypes.includes(queueType)
        ) {
            return axios
                .get(fetchUrl, {
                    params: {
                        tier: tier,
                        division: division,
                        queueType: queueType,
                    },
                })
                .then((res) => {
                    const leaderboardData = res.data;
                    console.log('leaderboard data found:', leaderboardData);
                    dispatch(
                        setLeaderboardData({
                            tier: tier,
                            division: division,
                            queueType: queueType,
                            leaderboard: leaderboardData,
                        })
                    );
                })
                .catch((err) => {
                    console.log(
                        'cannot load leaderboard data:\n',
                        err.response || err
                    );
                });
        }
    };
}

export const { setLeaderboardData, setLeaderboardFilter } =
    leaderboardSlice.actions;

export default leaderboardSlice.reducer;

export { fetchLeaderboardData };
