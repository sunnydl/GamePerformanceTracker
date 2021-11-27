import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { ChartState } from "../../interfaces";
import axios from 'axios';

const initialState: Array<ChartState> = [
    {
        name: 'Game 1',
        winLoss: 0,
        kills: 0,
        deaths: 0,
        assists: 0,
        scores: 0,
    },
    {
        name: 'Game 2',
        winLoss: 0,
        kills: 0,
        deaths: 0,
        assists: 0,
        scores: 0,
    },
    {
        name: 'Game 3',
        winLoss: 0,
        kills: 0,
        deaths: 0,
        assists: 0,
        scores: 0,
    }
];

const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {
        setChartData: (state, action: PayloadAction<Array<ChartState>>) => {
            return [...action.payload];
        },
    },
})

function fetchChartData(query: string, numOfMatch: number) {
    return async (dispatch: Dispatch) => {
        if (query) {
            const params = new URLSearchParams(query);
            const summonerName = params.get('summonerName');
            const region = params.get('region') ?? "NA"; // Defaults to NA region
            if (summonerName) {
                return axios.get('/api/matches/chart', {
                    params: {
                        summonerName: summonerName,
                        region: region,
                        numOfMatch: numOfMatch,
                    }
                })
                .then((res) => {
                    const chartData = res.data;
                    console.log('chart data found:', chartData);
                    dispatch(setChartData(chartData));
                })
                .catch((err) => {
                    console.log('chart data not found:\n', err.response || err);
                    dispatch(setChartData(initialState));
                });
            }
        }
    }
}

export const { setChartData } = chartSlice.actions

export default chartSlice.reducer

export { fetchChartData }
