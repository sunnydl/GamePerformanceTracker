import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/user';
import chartReducer from './slices/chart';
import leaderboardReducer from './slices/leaderboard';
import matchesReducer from './slices/matches';
import loadingReducer from './slices/loading';

export const store = configureStore({
    reducer: {
        user: userReducer,
        chart: chartReducer,
        leaderboard: leaderboardReducer,
        matches: matchesReducer,
        loading: loadingReducer,
    },
    
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
