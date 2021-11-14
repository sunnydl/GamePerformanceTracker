import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counter';
import userReducer from './slices/user';
import chartReducer from './slices/chart';
import leaderboardReducer from './slices/leaderboard';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        chart: chartReducer,
        leaderboard: leaderboardReducer,
    },
    
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
