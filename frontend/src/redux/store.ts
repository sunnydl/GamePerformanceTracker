import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/user';
import chartReducer from './slices/chart';
import matchesReducer from './slices/matches';

export const store = configureStore({
    reducer: {
        user: userReducer,
        chart: chartReducer,
        matches: matchesReducer,
    },
    
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
