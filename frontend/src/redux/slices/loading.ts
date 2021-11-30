import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../../interfaces';

const initialState: LoadingState = {
    overall: false,
    leaderboard: false,
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setOverallLoading: (state, action: PayloadAction<boolean>) => {
            state.overall = action.payload;
            return state;
        },
        setLeaderboardLoading: (state, action: PayloadAction<boolean>) => {
            state.leaderboard = action.payload;
            return state;
        },
    },
});

export const { setOverallLoading, setLeaderboardLoading } =
    loadingSlice.actions;

export default loadingSlice.reducer;
