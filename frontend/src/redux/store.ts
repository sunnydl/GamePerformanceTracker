import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counter';
import userReducer from './slices/user';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    },
    
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
