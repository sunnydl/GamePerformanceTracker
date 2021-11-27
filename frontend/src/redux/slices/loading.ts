import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            return action.payload;
        },
    },
})

export const { setLoading } = loadingSlice.actions

export default loadingSlice.reducer
